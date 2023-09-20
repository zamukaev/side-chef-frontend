import { FC } from "react";

import { BiX } from "react-icons/bi";
import { CloseIconProps } from "shared/types";

export const CloseIcon: FC<CloseIconProps> = (props) => {
  const { className, onClick, color, size, ...otherProps } = props;
  return <BiX onClick={onClick} {...otherProps} color={color} size={size} className={`${""} ${className}`} />;
};
