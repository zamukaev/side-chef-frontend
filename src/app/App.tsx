import { Header } from "../widgets/header";

import "./styles/index.scss";

// TODO:
// 1. Перенести 'Header' и 'BackgroundImages' в routes

const App = () => {
  return (
    <div className={"app" + " light"}>
      <Header />
    </div>
  );
};

export default App;
