import React from "react";
import LoginForm from "../LoginForm";
import styles from "./LoginSection.module.css";

const LoginSection = () => {
  return (
    <div className={styles.LoginSection}>
      <p className={styles.statement}>
        Expand your career opportunities with the latest technical skills!
      </p>
      <LoginForm />
    </div>
  );
};

export default LoginSection;
