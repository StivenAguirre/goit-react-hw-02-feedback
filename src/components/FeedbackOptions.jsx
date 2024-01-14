import React from "react";
import styles from "../diagram.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const getButtonStyle = (option) => {
    switch (option) {
      case "good":
        return styles["button-green"];
      case "neutral":
        return styles["button-yellow"];
      case "bad":
        return styles["button-red"];
      default:
        return styles["button"];
    }
  };

  return (
    <div>
      {options.map((option) => (
        <button key={option} className={getButtonStyle(option)} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;