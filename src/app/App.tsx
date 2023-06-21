import { useTranslation } from "react-i18next";

import { ThemeSwitcher } from "widgets/ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Header } from "../widgets/header";

import "./styles/index.scss";
     
// TODO:
// 1. Перенести 'Header' и 'BackgroundImages' в routes

const App = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
       <Header />
      <AppRouter />
      <h1>{t("hello world")}</h1>
      <ThemeSwitcher />
    </div>
  );
};

export default App;
