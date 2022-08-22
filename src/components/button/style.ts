import styled from "styled-components"

export const StyledButton = styled.button`
  font-family: "HelveticaNeueBold";
height: 60px;
background: ${props => props.color ? props.color : "#4A67FF"};
border-radius: 8px;
border: none;
font-weight: 700;
font-size: 18px;
line-height: 22px;
color: #FFFFFF;
cursor: pointer;
&:disabled {
  background: #99A9FF;
  
}
`