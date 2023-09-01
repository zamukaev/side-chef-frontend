import { FC } from "react";

import { BiX } from "react-icons/bi";

import styles from "./CloseIcon.module.scss";

interface CloseIconProps {
    className?: string;
    onClick?: () => void;
    color?: string;
}

export const CloseIcon: FC<CloseIconProps> = (props) => {
    const { className, onClick, color, ...otherProps } = props;
    return <BiX onClick={onClick} {...otherProps} color={color} size={26} className={`${styles.closeIcon} ${className}`} />;
};
