import styled from "styled-components"

export const StyledForm = styled.form`
  font-family: "HelveticaNeueReg";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  flex-direction: column;

`
export const StyledInput = styled.input`
width: 640px;
height: 60px;
margin-bottom:20px;
margin-top: 10px;
box-sizing: border-box;
padding: 20px;
background: #F5F5F5;
border: none;
border: 1px solid ${props => props.color};
border-radius: 8px;
& :focus {
  border: none;
  border: 1px solid ${props => props.color};
}
`

export const StyledError = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #E26F6F;
  margin-bottom: 20px;
`

export const StyledCheckBox = styled.div`

margin-bottom: 40px;
position: relative;
display: flex;
align-items: center;
& input {
  position: absolute;
      z-index: -1;
      opacity: 0;
}
& label {
  cursor: pointer;
  display: flex;
    align-items: center;
}
& label::before {
  content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid #000000;
      border-radius: 4px;
      margin-right: 14px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
}
& input:checked + label::after{
  position: absolute;
  left: 4px;
  content: '';
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  flex-grow: 0;
  background-color: #4A67FF;
  border-radius: 2px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
`