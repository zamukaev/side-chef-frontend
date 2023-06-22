import { ChangeEvent, useState } from "react";

import { BiSearch } from "react-icons/bi";

import styles from "./Search.module.scss";

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        placeholder="Ingredient, dish, keyword..."
        type="text"
        value={searchInput}
        onChange={changeInputHandler}
      />
      <BiSearch size={24} cursor="pointer" />
    </div>
  );
};
