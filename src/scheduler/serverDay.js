// import Badge from '@mui/material/Badge';
// import { PickersDay } from '@mui/x-date-pickers/PickersDay';

// // import { useState } from 'react';
// // import { useEffect } from 'react';

// const ServerDay = ()=>{
    
//     const {scheduleCnt, setScheduleList} = props;
//     const [wholedate, setWholeDate] = useState([]);

//     useEffect(()=>{
//         // const elementLists = document.querySelectorAll('.BigCalender button.MuiPickersDay-root').innerText;
        
  
//         const getMonthData = document.querySelector('.BigCalender .css-dplwbx-MuiPickersCalendarHeader-label').innerText.split(' ')[0];
//         const getYearData = document.querySelector('.BigCalender .css-dplwbx-MuiPickersCalendarHeader-label').innerText.split(' ')[1];
//         const getMonthFromString = ["January", "February", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"].indexOf(getMonthData) + 1;
//         const getMonthFromNumber = getMonthFromString < 10 ? '0' + getMonthFromString : getMonthFromString ;
  
//         const elementLists = [].map.call(document.querySelectorAll('.BigCalender button.MuiPickersDay-root'), function(el) {
//               if (el.innerText < 10){
//                   return '0' + el.innerText;
//               } 
  
//               return el.innerText;
//           });
  
//         //   const elementListsTwo = Object.keys(props.scheduleList);
//           // const onlyDayInList = elementListsTwo.map((u)=>{
//           //   setWholeDate(u.slice(4,7))
//           // });
  
  
//         const newKey = elementLists.map((newKey)=>{
//           return getYearData + getMonthFromNumber + newKey; 
//         })
        
//         console.log(newKey);
  
//         console.log('----------------1');
  
//         const getDatamatch = newKey.map((y)=>{
//           if(props.scheduleList[y] !== undefined) {
//             return console.log(props.scheduleList[y].length);
//           } 
//         });
  
//         console.log('----------------2');
//         // console.log(elementListsTwo);
  
//       }, [])

//     const isSelected = console.log('j');
    
//     return(
//         <>
//             <Badge badgeContent={true ? '🌚' : undefined}>
//                 <PickersDay/>
//             </Badge>
//         </>
//     );
// }

// export default ServerDay;