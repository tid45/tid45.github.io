import styled from "styled-components";
import { LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import { useEffect } from "react";


const SchedulerCalendar = (props)=>{
    const {date, setDate, scheduleCnt, scheduleList} = props;

    const [resultShedular, setResultShedular] = useState([]);
    // const [displayResult, setDisplayResult] = useState('');
    // const [currentYear, setCurrentYear] = useState('d');
    // const [currentMonth, setCurrentMonth] = useState('d');
    // const [currentDay, setCurrentDay] = useState('d');

    useEffect(()=>{
        
        
        const getMonthData = document.querySelector('.BigCalender .css-dplwbx-MuiPickersCalendarHeader-label').innerText.split(' ')[0];
        const getYearData = document.querySelector('.BigCalender .css-dplwbx-MuiPickersCalendarHeader-label').innerText.split(' ')[1];
        
        const getMonthFromString = ["January", "February", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"].indexOf(getMonthData) + 1;
        
        const getMonthFromNumber = getMonthFromString < 10 ? '0' + getMonthFromString : getMonthFromString ;


        // 01,02,03 과 같이 날짜 리스트를 보여줌
        const elementLists = [].map.call(document.querySelectorAll('.BigCalender button.MuiPickersDay-root'), function(el) {
            if (el.innerText < 10){
                return '0' + el.innerText;
            } 

            return el.innerText;
        });


        // ['20230901', '20230902'] 해당하는 월의 모든 데이터를 가져오는것 - new key
        const newKey = elementLists.map((newKey)=>{
            return getYearData + getMonthFromNumber + newKey; 
          });
        

        // 1, 2, 1의 결과물이 나옴
        const getDatamatch = ()=>{ 
            const filteredData = newKey.map((y, index)=>{
            if(props.scheduleList[y] !== undefined) {
                return <p key={index}>{`${y.substring(4, 6)} . ${y.substring(6, 8)}`}</p>;
            }
        });
        setResultShedular(filteredData);
    };

    getDatamatch();

        // const onlyExisting = getDatamatch.filter((value) => value !== undefined );

        // setResultShedular(onlyExisting);
        
        // const tidyUpData = resultShedular.map((a)=>{
        //     return <p>{`${a.substring(0, 4)}.${a.substring(4, 6)}.${a.substring(6, 8)}`}</p>;
        // });



        // if(getYearData == 'October'){
        //     return console.log('it looks like work')
        // }
        // console.log(resultShedular);

    },[])

    return (
        <SchedulerCalendarWrap>
            <MessageBeforeUse>&#8251; Calendar를 클릭하면 일절확인이 가능합니다</MessageBeforeUse>              
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar value={date} onChange={(newValue) =>{setDate(newValue)}}></DateCalendar>
                </LocalizationProvider>
            {/* <p>{date.format('YYYY년 MM월 DD일')}은 총 {scheduleCnt}개의 일정이 존재합니다</p> */}
                <ExistingShedultBox>
                    <p id="smallTitleSche">{scheduleCnt > 0 ? '오늘의 일정이 총' + `${scheduleCnt}` + '개 존재합니다' : '오늘의 일정이 존재하지 않습니다'}</p>
                    <h1>이번달 일정이 있는날짜</h1>
                    <div id="ClassDateList">
                        {resultShedular}
                    </div>
                </ExistingShedultBox>            
        </SchedulerCalendarWrap>
    );
}

export default SchedulerCalendar;

const SchedulerCalendarWrap = styled.div`
    align-self: flex-start;
    margin-top: 30px;

    @media screen and (max-width:768px) {
        width: 100%;
        text-align: center;
        margin-bottom: 50px;
    }

    .Mui-selected {
        border: unset;
        background-color: rgb(253, 253, 253) !important;
        border-radius: 0px;
        color: black !important;
    }

    .MuiPickersDay-today {
        border-radius: 0px;
        background-color: rgb(253 245 242) !important;
        border: unset !important;
    }

    .css-156tkzh-MuiButtonBase-root-MuiPickersDay-root {
        border-radius: 0px;
    }

`;

const ExistingShedultBox = styled.div`
    #smallTitleSche { 
        font-size: 15px; 
    }

    h1 { 
        font-size: 19px;
        margin: 65px 0px 20px 0px;
    }

    #ClassDateList {
        display: flex;
        justify-content: space-between;

        p { line-height: 30px; }
    }
`

const MessageBeforeUse = styled.div`
    font-weight: bold;
    font-size: 13px;
    text-align: center;
    margin-bottom: 20px;
    color: #adadad;
`;

