import { useTranslation } from "react-i18next";
import "./styles/index.scss";
import { Suspense } from "../../build/main.d01804b1dd59b781207f";

const App = () => {
  const { t } = useTranslation();
  return (
    <div className={"app" + " light"}>
      <h1>{t("hello world")}</h1>
    </div>
  );
};

export default App;
