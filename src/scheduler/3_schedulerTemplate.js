import styled from "styled-components";

const SchedulerTemplate = ({children})=>{
    return (
        <SchedulerTemplateWrap>
            {children}
        </SchedulerTemplateWrap>
    );

}

export default SchedulerTemplate;

const SchedulerTemplateWrap = styled.div`
    display: flex;
    background-color: white;
    height: fit-content;
    /* min-height: calc(100vh - 60px); */
    justify-content: space-between;
    column-gap: 30px;
    min-height: 420px;
    box-sizing: border-box;
    padding: 35px 30px;

    @media screen and (max-width:768px) {
        flex-direction: column;
        height: 100%;
        width: 90%;
        display: block;
        margin: 0 auto;
    }
`;