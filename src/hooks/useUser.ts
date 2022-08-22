
import { useAppSelector } from "./redux-hooks";

export function useUser() {
  const { login, password } = useAppSelector(state => state.user)

  return {
    isAuth: !!login,
    password,
    login
  }
}