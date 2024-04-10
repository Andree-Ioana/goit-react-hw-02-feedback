import React from 'react';
import styles from "./Feedback.module.css";

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);

  return (
    <div className={styles.statisticContainer}>
      <p className={styles.statisticItem}>Good: {good}</p>
      <p className={styles.statisticItem}>Neutral: {neutral}</p>
      <p className={styles.statisticItem}>Bad: {bad}</p>
      <p className={styles.statisticItem}>Total: {totalFeedback}</p>
      <p className={styles.statisticItem}>Positive Feedback: {positiveFeedback}%</p>
    </div>
  );
};

export default Statistics;
