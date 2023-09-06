import styled from "styled-components";

const BottomSheetHeader = ({setIsOpen})=>{
    return(
        <HeaderWrap>
            <MyIcon onClick={()=>{setIsOpen(false)}}>X</MyIcon>
            <h2>{}일정 추가하기</h2>
        </HeaderWrap>
    );
}

export default BottomSheetHeader;

const HeaderWrap =styled.div`
    border-bottom: 1px solid #e9e9e9;
    padding: 20px 0;
    position: relative;

    & h2{
        font-size: 20px;
        text-align: center;
        font-weight: 700;
    }
`;

const MyIcon = styled.div`
    font-weight: bold;
    font-size: 20px;
    position: absolute;
    cursor: pointer;
`;