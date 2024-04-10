import React from 'react';
import styles from "./Feedback.module.css";

const Notification = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};

export default Notification;
