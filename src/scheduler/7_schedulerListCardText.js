import styled from "styled-components";

const SchedulerListCardText = (props)=>{
    
    return(
        <CardTextWrap>
            <h4>{props.title}</h4>
            <p>{props.sTime} - {props.eTime}</p>
            <p>{props.detail}</p>
        </CardTextWrap>
    );
}

export default SchedulerListCardText;

const CardTextWrap = styled.div`

    & h4{

    }
`;