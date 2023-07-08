import { ChangeEvent, useState } from "react";

import { BiSearch, BiX } from "react-icons/bi";

import styles from "./Search.module.scss";

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const isInputEmpty = searchInput.trim() === "";

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const focusInputHandler = () => {
    setIsFocused((prevIsFocused) => !prevIsFocused);
  };

  const clearInputHandler = () => {
    setSearchInput("");
  };

  return (
    <div
      className={`${styles.search} ${isFocused ? styles.search_focused : ""}`}
    >
      <input
        placeholder="Ingredient, dish, keyword..."
        type="text"
        value={searchInput}
        onChange={changeInputHandler}
        onFocus={focusInputHandler}
        onBlur={focusInputHandler}
      />
      {isInputEmpty ? (
        <BiSearch size={24} cursor="pointer" />
      ) : (
        <BiX size={24} cursor="pointer" onClick={clearInputHandler} />
      )}
    </div>
  );
};
