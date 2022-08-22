import { useCallback } from "react";
import { Navigate } from "react-router";
import Header from "../components/header/header";
import Layout from "../components/layout/layout";
import UserInfo from "../components/userInfo/user-info";
import { useAppDispatch } from "../hooks/redux-hooks";
import { useUser } from "../hooks/useUser"
import { AppRoute } from "../roads";
import { removeUser } from "../store/slices/userSlice";

function HomePage() {
  const state = useUser()
  const { isAuth, login } = state;
  const dispatch = useAppDispatch()
  const callbacks = {
    onExit: useCallback((): void => {
      dispatch(removeUser())
    }, [])
  }
  if (!isAuth) {
    return (<Navigate to={AppRoute.login} replace />)
  }
  return (
    <>
      <Header />
      <Layout>
        <UserInfo login={login} callback={callbacks.onExit} />
      </Layout>
    </>


  )
}

export default HomePage
