import Button from "../button/button"
import { StyledUserInfo } from "./style"

type UserInfoProps = {
  login: string | null,
  callback: () => void,
}

function UserInfo(props: UserInfoProps): JSX.Element {
  return (
    <StyledUserInfo>
      <p>Здравствуйте, <span>{props.login}</span> </p>
      <Button callback={props.callback} title="Выйти" color="#F5F5F5" />

    </StyledUserInfo>
  )
}

export default UserInfo
