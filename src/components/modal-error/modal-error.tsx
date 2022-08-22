import { StyledModalError } from "./style"

type ModalErrorProps = {
  login: string
}

function ModalError(props: ModalErrorProps): JSX.Element {
  return (
    <StyledModalError>
      <span></span> Пользователя {props.login} не существует
    </StyledModalError>
  )
}

export default ModalError
