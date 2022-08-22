import styled from "styled-components"

export const StyledUserInfo = styled.div`
font-family: "HelveticaNeueReg";
display: flex;
flex-direction: column;
align-items: center;
gap: 50px;
  & p {
    font-size: 40px;
  }
  & span {
    font-family: "HelveticaNeueBold";
  }
  
  & button {
    width: 200px;
    color: #000000;
  }
`