import { IconButton } from "@mui/material";
import styled from "styled-components";
import SchedulerListCardText from "./7_schedulerListCardText";

const SchedulerListCard = (props) =>{

    const {title, detail, completed, sTime, eTime, onClick, onXClick} = props;

    return(
        <ListCardWrap onClick={onClick} completed={completed}>
            <SchedulerListCardText
                title={title}
                detail={detail}
                sTime={sTime}
                eTime={eTime}
            />
            <IconButton onClick={onXClick}>
                X
            </IconButton>
        </ListCardWrap>
    );
}

export default SchedulerListCard;

const ListCardWrap = styled.div`
    background-color: white;
    width: 90%;
    border: 3px solid lightblue;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;

    transition: 300ms;
    position: relative;

    ${
        ({completed})=> completed && {
            color: '#e9e9e9',
            borderColor: '#e9e9e9',

            '&::after': {
                content: '"♥completed!!"',
                color: 'green',
                position: 'absolute',
                right: '5px',
                top: '0'
            }
        }
    }

    ${
        ({completed})=> completed || {
            boxShadow: '2px 3px 4px rgba(0,0,0,0.1)',
            '&:hover':{
                transform: 'scale(1.05)',
                backgroundColor: 'lightblue'
            }
        }
    }
`;