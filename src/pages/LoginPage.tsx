import { useCallback, useEffect, useState } from "react"
import { FieldValues } from "react-hook-form"
import { Navigate } from "react-router"
import Form from "../components/form/form"
import Header from "../components/header/header"
import Layout from "../components/layout/layout"
import ModalError from "../components/modal-error/modal-error"
import { useAppDispatch } from "../hooks/redux-hooks"
import { useUser } from "../hooks/useUser"
import check from "../mocks/server"
import { data } from "../mocks/type"
import { AppRoute } from "../roads"
import { setUser } from "../store/slices/userSlice"

function LoginPage(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [replace, setReplace] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const state = useUser()
  const { isAuth } = state;
  useEffect(() => {
    if (isAuth) {
      const timer = setTimeout(() => {
        setReplace(true)
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isAuth])
  const callbacks = {
    handleClick: useCallback((data: FieldValues): void => {
      setError("")
      setLoading(true);
      const { login, password } = data;
      if (check(data as data) === true) {
        dispatch(setUser({
          login: login,
          password: password
        }))
      } else {
        setError(login)
        setLoading(false)
      }

    }, [])
  }
  if (replace) {
    return <Navigate to={AppRoute.home} replace />
  }
  return (
    <>
      <Header />
      <Layout>
        {
          error ? <ModalError login={error} /> : <></>
        }
        <Form callback={callbacks.handleClick} loading={loading} />
      </Layout>
    </>


  )
}

export default LoginPage


// Аргумент типа "(data: data) => void" нельзя назначить параметру типа "SubmitHandler<FieldValues>".
//   Типы параметров "data" и "data" несовместимы.
//     В типе "FieldValues" отсутствуют следующие свойства из типа "data": login, password