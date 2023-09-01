import React, { useState } from "react";

import styles from "./Measures.module.scss";

export enum measuresItems {
  US = "us",
  METRIC = "metric",
}

export const Measures = ({
  selectedMeasure,
  setSelectedMeasure,
}: {
  selectedMeasure: measuresItems;
  setSelectedMeasure: (arg0: measuresItems) => void;
}) => {
  const measureToggle = (measure: measuresItems) => {
    setSelectedMeasure(measure);
  };

  return (
    <div className={styles.measures}>
      <button
        className={`${styles.measure} ${
          selectedMeasure === measuresItems.US ? styles.measure__active : ""
        }`}
        onClick={() => measureToggle(measuresItems.US)}
      >
        {measuresItems.US}
      </button>
      <span className={styles.delimiter}> | </span>
      <button
        className={`${styles.measure} ${
          selectedMeasure === measuresItems.METRIC ? styles.measure__active : ""
        }`}
        onClick={() => measureToggle(measuresItems.METRIC)}
      >
        {measuresItems.METRIC}
      </button>
    </div>
  );
};
