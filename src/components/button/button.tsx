import { StyledButton } from "./style"

type ButtonProps = {
  disabled?: boolean
  title: string,
  callback?: () => void,
  type?: string,
  color?: string,
}

function Button({ disabled, title, callback, type, color }: ButtonProps): JSX.Element {
  return (
    <StyledButton disabled={disabled} onClick={callback} color={color} >
      {title}
    </StyledButton>
  )
}

export default Button
