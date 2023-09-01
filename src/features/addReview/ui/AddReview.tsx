import { ChangeEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { EditGrade } from "shared/ui";

import styles from "./AddReview.module.scss";

const transition = { duration: 0.3, ease: "easeInOut" };

export const AddReview = () => {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [largeTextArea, setLargeTextArea] = useState(false);

  const closeLargeTextArea = () => {
    setLargeTextArea(false);
    setTextAreaValue("");
  };

  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <motion.div
      className={styles.addReview}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <img
        src="https://lh3.googleusercontent.com/ogw/AOLn63Hx2veKpGi0KANHQ5swGzIbzz3fGtNAnfYgPeJ5=s32-c-mo"
        alt="avatar"
        className={styles.avatar}
      />
      <div className={styles.review}>
        {largeTextArea && (
          <motion.div
            key="review-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className={styles.review__name}>Александр Пушкин</p>
            <EditGrade />
          </motion.div>
        )}
        <textarea
          className={`${styles.review__textArea} ${
            largeTextArea ? styles.expanded : ""
          }`}
          placeholder="Write your review or comment here"
          onFocus={() => setLargeTextArea(true)}
          value={textAreaValue}
          onChange={(e) => handleChangeTextArea(e)}
        />
        {largeTextArea && (
          <motion.div
            className={styles.buttons}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button className={`${styles.button} ${styles.button__send}`}>
              Submit
            </button>
            <button
              className={`${styles.button} ${styles.button__close}`}
              onClick={closeLargeTextArea}
            >
              Cancel
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
