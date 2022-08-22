import styled from "styled-components"
import { StyledLayout } from "./style"

type LayoutProps = {
  children: React.ReactNode
}

function Layout(props: LayoutProps): JSX.Element {
  return (
    <StyledLayout>
      {props.children}
    </StyledLayout>
  )
}

export default Layout
