import React from "react";
import styles from "../diagram.module.css"

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles["container-datos"]}>
      <p className={styles["text-datos"]}>GOOD: {good}</p>
      <p className={styles["text-datos"]}>NEUTRAL: {neutral}</p>
      <p className={styles["text-datos"]}>BAD: {bad}</p>
      <p className={styles["text-datos"]}>TOTAL: {total}</p>
      <p className={styles["text-datos"]}>POSITIVE FEEDBACK: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;