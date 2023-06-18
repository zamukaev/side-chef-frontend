import { Header } from "../widgets/header";
import { BackgroundImages } from "../widgets/backgroundImages";

import "./styles/index.scss";

// TODO:
// 1. Перенести 'Header' и 'BackgroundImages' в routes

const App = () => {
  return (
    <div className={"app" + " light"}>
      <Header />
      <BackgroundImages />
    </div>
  );
};

export default App;
