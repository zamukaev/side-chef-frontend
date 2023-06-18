import { FC } from "react";

interface MainProps {
    className?: string;
}

const Main: FC<MainProps> = (props) => {
  const { className } = props;

  return (
    <div>
      <h1>Main Page</h1>
    </div>
  );
};

export default Main;
