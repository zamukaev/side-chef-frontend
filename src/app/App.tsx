import { useTranslation } from "react-i18next";

import { ThemeSwitcher } from "widgets/ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";

import "./styles/index.scss";

const App = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <AppRouter />
      <h1>{t("hello world")}</h1>
      <ThemeSwitcher />
    </div>
  );
};

export default App;
