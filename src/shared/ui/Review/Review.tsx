import React, { useState, useRef, useEffect } from "react";
import { MdEdit } from "react-icons/md";

import { Grade } from "shared/ui/grade/Grade";

import styles from "./Review.module.scss";

export const Review = () => {
  const [canEdit, setCanEdit] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (canEdit && textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(
        textareaRef.current.value.length,
        textareaRef.current.value.length,
      );
    }
  }, [canEdit]);

  const toggleEditComment = () => {
    setCanEdit((prev) => !prev);
  };

  return (
    <div className={styles.review}>
      <img
        src="https://lh3.googleusercontent.com/ogw/AOLn63Hx2veKpGi0KANHQ5swGzIbzz3fGtNAnfYgPeJ5=s32-c-mo"
        alt="avatar"
        className={styles.avatar}
      />
      <div>
        <p className={styles.name}>
          Александр Пушкин <span>a year ago</span>
        </p>
        <Grade count={4} />
        <textarea
          ref={textareaRef}
          disabled={!canEdit}
          className={`${styles.comment}`}
        >
          Very tasty, and easy to make 🥰 Very tasty, and easy to make 🥰 Very
          tasty, and easy to make 🥰 Very tasty, and easy to make 🥰 Very tasty,
          and easy to make 🥰
        </textarea>
        {canEdit && (
          <div>
            <button className={`${styles.button} ${styles.button__send}`}>
              Submit
            </button>
            <button
              className={`${styles.button} ${styles.button__close}`}
              onClick={toggleEditComment}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
      {!canEdit && (
        <div className={styles.edit} onClick={toggleEditComment}>
          <MdEdit fill="#bababa" size={18} />
          <p>Edit</p>
        </div>
      )}
    </div>
  );
};
