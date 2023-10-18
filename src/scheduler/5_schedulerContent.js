import styled from "styled-components";
import SchedulerListCard from "./6_schedulerListCard";
import AddIcon from '@mui/icons-material/Add';
import { DateCalendar, LocalizationProvider, PickersDay } from "@mui/x-date-pickers";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';

import { useEffect, useState } from "react";
import React from "react";





// 논리 처리(날짜와 스케줄리스트를 받아서 해당 날짜의 스케줄
// 들이 들어있있는 ListCard를 return 해주는 함수)

const getListCards = (date, scheduleList, f, f2)=>{
    const key = date.format('YYYYMMDD');

    // 만약 '20230301' 번째 방에 스케줄이 없다면 undefined
    // 만약 '20230301' 번째 방이 스케줄이 모두 삭제되었다면 비어있는 배열
    if(scheduleList[key] === undefined || scheduleList[key].legth === 0){
        return <Ifdontexist>일정을 추가해주세요</Ifdontexist>
    }

    return scheduleList[key].map(
        (v)=> <SchedulerListCard 
            key={v.id} 
            completed={v.isComplete}
            title={v.title}
            detail={v.detail}
            sTime={v.sTime}
            eTime={v.eTime}  
            onClick={()=>{f(v.id)}} 
            onXClick={()=>{f2(v.id)}}
            marked={true}
            // month={date.format('MM')}
            // day={date.format('DD')}
        />
    );

}

const SchedulerContent = (props) =>{
    const {setIsOpen, date, scheduleList, scheduleCnt, completeCnt, setScheduleList, setDate, setBgState} = props;

    const onCompleteClick = (id)=>{
        
        setScheduleList((scheduleList)=>{
            console.log('onCopelete 함수 실행됨!');
            const key = date.format('YYYYMMDD');
            const tmp = JSON.stringify(scheduleList);
            const copy = JSON.parse(tmp); //완전히 똑같은데 완전히 새로운 객체가 된다
    
            const updatedSchedule =  copy[key].map((v)=>
                v.id === id ? {...v , isComplete: !v.isComplete} : v
            );
            
            copy[key] = updatedSchedule;
            return copy
        });
    }

    const onXClick = (id)=>{
        setScheduleList((scheduleList) => {
            const cpy = JSON.parse(JSON.stringify(scheduleList));
            const key = date.format('YYYYMMDD');
            cpy[key] = cpy[key].filter((v)=> v.id !== id);
         
            return cpy;
        });
    }

    

    const listCards = getListCards(date, scheduleList, onCompleteClick, onXClick);





    // const [ dateDataList, setDateDataList ] = useState([]);

    // specificCalender.forEach(function(node, idx) {
    //     node.classList.add('fuckthisShit');
    // });

    // console.log('scheduleList', scheduleList);
    // console.log('wholeDate', wholeDate);

    // function mapTryOne() {
    //     scheduleList.map((n)=> console.log(n));
    //  }  
    



    
    


    return(
        <SchedulerContentFlex>
            <div className="BigCalender">                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar value={date} onChange={(newValue) =>{setDate(newValue)}} >
                    </DateCalendar>
                </LocalizationProvider>
            </div>
        <SchedulerContentWrap>
            <SchedulerHeader>
                <h2>{date.format('YYYY년 MM월 DD일 ')}스케줄</h2>
                <p>총 {scheduleCnt}개 항목 중 {completeCnt}개 완료!</p>
                <button onClick={()=>{setIsOpen('flex'); setBgState(true)}}><AddIcon/></button>
            </SchedulerHeader>
            {listCards}
        </SchedulerContentWrap>
        </SchedulerContentFlex>
    );
}

export default SchedulerContent;

const SchedulerContentFlex = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    .BigCalender {
        display: contents;

        .sheduleExist::after{
            content: "⋄";
            position: absolute;
            top: -13px;
            right: 10px;
            font-size: 30px;
            color: #ebcdc1;
        }

        @media screen and (max-width:768px) {
            display: none;
        }

        .css-flbe84-MuiDayCalendar-weekContainer {
            margin: 0px;

            .MuiPickersDay-root {
                @media screen and (max-width:768px) {
                    height: 56px;
                }
            }
        }

        .MuiPickersCalendarHeader-labelContainer {
            display: block;
            margin: 0 auto;

            div { float: left; }

            button { float: left; }
        }
    }

    .css-1hiwve1-MuiButtonBase-root-MuiPickersDay-root {
        background-color: rgb(253 245 242) !important;
        color: black !important;
    }

    .MuiButtonBase-root {
        margin: 0px;
        padding: 0px 2px;
        font-size: 1rem;
    }

    & .MuiDateCalendar-root {
        width: 100%;
        min-height: 498px;

        & .MuiPickersFadeTransitionGroup-root div div .MuiDayCalendar-header span {
            width: 100%;
        }
    
        .MuiPickersDay-root {
            width: 100%;
        }

        .MuiTouchRipple-root {
            width: unset;
        }

        .Mui-selected {
            border-radius: 0px;
            background-color: rgb(253, 253, 253) !important;
            color: black !important;
        }

        .MuiPickersDay-root {
            height: 76px;
            border-width: 1px 0px 0px 1px;
            border-style: solid;
            border-radius: 0px;
            border-color: #f1f1f1;
        }

        .MuiDayCalendar-slideTransition {
            min-height: 400px;
        }
    }
`;

const SchedulerContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    /* overflow-y: scroll; */
    padding: 25px 20px;
    row-gap: 20px;
    margin-top: 50px;

    @media screen and (max-width:768px) {
        margin-bottom: 100px;
    }

    &::-webkit-scrollbar{
        display: none;
    }

    align-items: center;
`;

const SchedulerHeader = styled.div`
    border-bottom: 3px solid #e9e9e9;
    
    /* position: sticky; //relative 자동적용 */
    /* z-index: 1; */
    background-color: white;
    
    padding-top: 20px 0px 10px;

    & button {
        position: absolute;
        right: 10px;
        bottom: 10px;
        border: none;
        background: none;
    }

    width: 100%;
    top: 0;
`;

const Ifdontexist = styled.p`
    /* padding-top: 150px; */
    width: 100%;
    height: 100%;
    text-align: center;
    padding-top: 50px;
`;