import { FC } from "react";

import { useTheme } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from "shared/ui/button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={className}
    >
      theme
    </Button>
  );
};
