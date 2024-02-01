import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./LoginForm.module.css";
import { useRouter } from "next/router";

const LoginForm = () => {
  //stores state of email and password input to eventually reflect changes
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  //whatever that happens on submit
  const handleSubmit = (event) => {
    event.preventDefault(); //because forms by default reload the page on submit which we do not
    axios //used to make requests to node.js server
      .post(`http://localhost:8000/login`, {
        email,
        password,
      })
      .then((res) => {
        if (res.data.success) {
          router.push("./home");
        } else {
          alert(`login FAILED`);
        }
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <div>
      {/* onSubmit is triggered when you submit a form by
        1. clicking the submit button
        2. pressing enter
      */}
      <form onSubmit={handleSubmit} className={styles.LoginForm}>
        <div className={styles.InputContainer}>
          <label htmlFor="email" className={styles.labels}>
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            className={styles.InputBoxes}
            // input value will change whenever email state changes (example: debit card number side effect)
            value={email}
            // email state changes whenever input value changes
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className={styles.InputContainer}>
          <label htmlFor="password" className={styles.labels}>
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            className={styles.InputBoxes}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <span className={styles.forgot}>Forgot password</span>
        </div>

        {/* type="submit" to trigger onSubmit */}
        <button type="submit" className={styles.SubmitButton}>
          Login
        </button>
        <p className={styles.OR}>OR</p>
        <button className={styles.GoogleLogin}>
          Login with Google
          <img src="/google.svg" alt="google icon" height={16} />
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
