import styled from "styled-components";
import { LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import ReducerPageTest from "./test";

const SchedulerCalendar = (props)=>{
    const {date, setDate, scheduleCnt} = props;
    return (
        <SchedulerCalendarWrap>
            <MessageBeforeUse>&#8251; Calendar를 클릭하면 일절확인이 가능합니다</MessageBeforeUse>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar value={date} onChange={(newValue) =>{setDate(newValue)}}></DateCalendar>
            </LocalizationProvider>
            <p>{date.format('YYYY년 MM월 DD일')}은 총 {scheduleCnt}개의 일정이 존재합니다</p>
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
        margin-bottom: 100px;
    }

    .Mui-selected {
        border: unset;
        background-color: #f7f7f7 !important;
        border-radius: 0px;
        color: black !important;
    }

    .MuiPickersDay-today {
        border-radius: 0px;
        background-color: #c7c7c7 !important;
        border: unset !important;
    }

    .css-156tkzh-MuiButtonBase-root-MuiPickersDay-root {
        border-radius: 0px;
    }
`;

const MessageBeforeUse = styled.div`
    font-weight: bold;
    font-size: 13px;
    text-align: center;
    margin-bottom: 20px;
    color: #adadad;
`;

