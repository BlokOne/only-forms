import { Navigate, Route, Routes } from "react-router";
import { createGlobalStyle } from "styled-components";
import { StyledFonts } from "./fonts/fonts";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { AppRoute } from "./roads";

const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function App(): JSX.Element {
  return (
    <div className="app">
      <StyledFonts />
      <Global />
      <Routes>
        <Route path={AppRoute.home} element={<HomePage />} />
        <Route path={AppRoute.login} element={<LoginPage />} />
        <Route path="*" element={<Navigate to={AppRoute.home} replace />} />
      </Routes>
    </div>
  );
}

export default App;
