import { FC } from "react";

import { BiX } from "react-icons/bi";

interface CloseIconProps {
  className?: string;
  color?: string;
  size?: number
  onClick?: () => void;

}

export const CloseIcon: FC<CloseIconProps> = (props) => {
  const { className, onClick, color, size, ...otherProps } = props;
  return <BiX onClick={onClick} {...otherProps} color={color} size={size} className={`${""} ${className}`} />;
};
