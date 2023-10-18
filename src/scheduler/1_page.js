import { useState } from 'react';
import styled from 'styled-components';
import SchedulerHeader from './2_schedulerHeader';
import SchedulerTemplate from './3_schedulerTemplate';
import SchedulerCalendar from './4_schedulerCalendar';
import dayjs from 'dayjs';
import SchedulerContent from './5_schedulerContent';
import BottomSheet from './8_bottomSheet';


const initialDate = {
        '20231005':[
          {
            id:1, 
            title:'장보기', 
            detail:'저녁거리를 사러 가야함', 
            isComplete:true,
            sTime:'10:00',
            eTime:'11:00', 
            marked:true,
            month:'10',
            day:'05'
          },
          {
            id:2, 
            title:'장보기', 
            detail:'저녁거리를 사러 가야함2', 
            isComplete:false,
            sTime:'10:00',
            eTime:'11:00',
            marked:true,
            month:'10',
            day:'05'
          },
          {
            id:3, 
            title:'장보기3', 
            detail:'저녁거리를 사러 가야함3', 
            isComplete:false,
            sTime:'09:00',
            eTime:'11:00',
            marked:true,
            month:'10',
            day:'05'
          },
        ],
        '20231006':[
          {
            id:1, 
            title:'장보기', 
            detail:'저녁거리를 사러 가야함', 
            isComplete:true,
            sTime:'10:00',
            eTime:'11:00', 
            marked:true,
            month:'10',
            day:'06'
          },
        ],
        '20231017':[
          {
            id:1, 
            title:'장보기', 
            detail:'저녁거리를 사러 가야함', 
            isComplete:true,
            sTime:'10:00',
            eTime:'11:00', 
            marked:true,
            month:'10',
            day:'17'
          },
        ],
        '20230915':[
          {
            id:1, 
            title:'장보기2', 
            detail:'저녁거리를 사러 가야함2', 
            isComplete:true,
            sTime:'10:00',
            eTime:'11:00', 
            marked:true,
            month:'09',
            day:'15'
          },
        ],
      };


      
//schedule의 총갯수 구하는 함수(매개변수로 scheduleList와 내가 보고싶은 날짜를 받아와서)
//함수 사용 결과는 schdule 갯수 return
const getScheduleCnt = (date, scheduleList)=>{
  const key = date.format('YYYYMMDD');
  if(scheduleList[key] === undefined){
    return 0;
  }

  return scheduleList[key].length;
}


//완료된 schedule 갯수 구하는 함수(매개변수로 scheduleList와 내가 보고싶은 날짜를 받아와서)
//함수사용 결과는 완료된 갯수 return

const getCompletedCnt = (date, scheduleList)=>{
  const key = date.format('YYYYMMDD');
  if(scheduleList[key] === undefined){
    return 0;
  }

  return scheduleList[key].filter((v)=>v.isComplete).length;
}



const MainPage= (props)=>{
    const [date, setDate] = useState(dayjs());
    
    const [scheduleList, setScheduleList] = useState(initialDate);
    const [isOpen, setIsOpen] = useState(false);

    // console.log(date);

    const scheduleCnt = getScheduleCnt(date, scheduleList);
    const completeCnt = getCompletedCnt(date, scheduleList);

    const [ bgState, setBgState ]= useState(false);
    

    // const testkeyMatching = (newKey, scheduleList)=>{
    //   if(scheduleList[newKey] === undefined) {
    //       return console.log('nothing');
    //   }
    //     return console.log('matched!');
    // }

    // console.log('testkeyMatching------------', testkeyMatching);

    // const testkeyMatching = scheduleList[newKey].map(obj =>{
    //   if(obj['marked'] == true) {
    //     return obj.id
    //   }
    // })

    // console.log('testkeyMatching------------', testkeyMatching);

    return(
      <div id='thisis' style={{height: bgState ? '100vh' : '100%', overflow: bgState ? 'hidden' : 'unset' }}>
        <BottomSheet 
              setIsOpen={setIsOpen} 
              isOpen={isOpen}
              scheduleList={scheduleList}
              setScheduleList={setScheduleList}
              date={date}
              setBgState={setBgState}
            />
        <MainWrap>
            <SchedulerHeader/>
            <SchedulerTemplate>
                <SchedulerCalendar 
                  scheduleCnt={scheduleCnt} 
                  date={date} 
                  setDate={setDate} 
                  scheduleList={scheduleList} 
                  setScheduleList={setScheduleList}
                  >
                </SchedulerCalendar>
                <SchedulerContent 
                  completeCnt={completeCnt}
                  scheduleCnt={scheduleCnt}
                  scheduleList={scheduleList} 
                  setScheduleList={setScheduleList}
                  date={date} 
                  setIsOpen={setIsOpen}
                  setDate={setDate}
                  setBgState={setBgState}
                  bgState={bgState}
                />
            </SchedulerTemplate>            
        </MainWrap>
      </div>
    );
}

export default MainPage;

const MainWrap = styled.div`
    width: 100%;
    max-width: 1500px;
    height: 100vh;
    margin: 0 auto;
`;