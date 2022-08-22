import { memo } from "react"
import styled from "styled-components"

const StyledLogo = styled.div`
  font-family: "HelveticaNeueBold";
  font-size:10px;
  position: absolute;
  top: 40px;
  font-weight: 700;
  font-size: 64px;
  line-height: 78px;
  color: #000000;
  text-transform: uppercase;
  left: 50%;
  transform: translate(-50%,0);
`

function Header() {
  return (
    <StyledLogo>
      only.
    </StyledLogo>
  )
}

export default memo(Header) 
