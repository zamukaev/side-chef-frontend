import { FC } from "react";
import { DropDownList } from "./dropDownList/DropDownList";
import styles from "./DropDownLists.module.scss";

interface DropDownListsProps {
  className?: string;
}

export const DropDownLists: FC<DropDownListsProps> = (props) => {
  const { className } = props;
  return (
    <section className={styles.dropDownList}>
      <DropDownList />
    </section>
  );
};
