import { Button, TextField } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import styled from "styled-components";
import BottomSheetHeader from "./10_bottomSheetHeader";

const BottomSheetContent = (props) =>{
    const [sTime, setSTime] = useState(dayjs());
    const [eTime, setETime] = useState(dayjs());
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');

    const {setIsOpen, scheduleList, setScheduleList, date} = props;

    const onAdd = ()=>{
        //유효성 검사

        if(sTime > eTime){
            alert('시작시간이 더 느립니다');
            return;
        }

        if(title==='' || detail===''){
            alert('제목 과 내용을 모두 입력해주세요');
            return;
        }

        //추가할 스케줄 객체 만들기
        const key = date.format('YYYYMMDD');
        let newId = 0;
        if(scheduleList[key] === undefined || scheduleList[key].length === 0){
            newId = 1;
        } else{
            newId = scheduleList[key][scheduleList[key].length - 1].id +1;
        }
        const newSchedule = {
            id:newId, 
            title, //title : title변수속값
            detail, 
            sTime:sTime.format('HH:mm'),
            eTime:eTime.format('HH:mm'), 
            isComplete:false,
        }
        //원본하고 완전히 동일한 스캐줄리스트 생성
        const cpy = JSON.parse(JSON.stringify(scheduleList));
        if(cpy[key] === undefined){
            cpy[key] = [newSchedule];
        } else{
            cpy[key].push(newSchedule);
        }

        setScheduleList(cpy);

        setIsOpen(false);
        setTitle('');
        setDetail('');
        setSTime(dayjs());
        setETime(dayjs());
    }

    return(
        <ContentWrap>
            <BottomSheetHeader setIsOpen={setIsOpen}/>
            <BodyWrap>
                <TimeZone>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker 
                            value={sTime} 
                            onChange={(v)=>setSTime(v)}
                            label="시작시간"
                        />
                        <TimePicker 
                            value={eTime} 
                            onChange={(v)=>setETime(v)}
                            label="종료시간"
                        />
                    </LocalizationProvider>
                </TimeZone>
                <TextZone>
                    <TextField 
                        variant="standard" 
                        label="일정제목"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                    <TextField 
                        multiline 
                        rows={6} 
                        label="상세내용"
                        value={detail}
                        onChange={(e)=>setDetail(e.target.value)}
                    />
                </TextZone>
            </BodyWrap>
            <Button variant="contained" onClick={onAdd}>추가하기</Button>
        </ContentWrap>
    );
}

export default BottomSheetContent;

const ContentWrap = styled.div`
    width: 60%;
    height: fit-content;
    background-color: white;
    /* position: absolute;
    bottom: 0; */
    border-radius: 10px;
    /* border-top-left-radius: 20px;
    border-top-right-radius: 20px; */

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 40px 50px;
`;

const BodyWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 70%;
    margin: 50px 0px;
`;

const TimeZone = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    justify-content: center;
    align-self: flex-start;
    margin-top: 50px;

    @media screen and (max-width:768px) {
        width: 100%;
        border: none;
    }
`;

const TextZone = styled.div`
    flex-grow: 1;
    padding: 30px;
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    border-left: 3px dotted #e9e9e9;
    align-self: flex-start;
`;

