import styled from "styled-components"

export const StyledModalError = styled.div`
font-family: "HelveticaNeueReg";
position: relative;
width: 640px;
height: 60px;
background: #F5E9E9;
border: 1px solid #E26F6F;
border-radius: 8px;
display: flex;
align-items:center;
justify-content: flex-start;
padding: 21px 20px 20px 54px;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #000000;
margin-bottom:27px;
& span::before {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  content: "";
  width: 20px;
  height: 20px;
  background-color: #FFC8C8;
  border-radius: 100%;

  transform: translate(0%,-50%);
  left: 20px;
}
& span::after {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  content: "!";
  background-color: #FFC8C8;
  color: #EE6565;
  transform: translate(0%,-50%);
  left: 28px;
}
`