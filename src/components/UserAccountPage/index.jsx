import React from "react";
import styles from "./UserAccountPage.module.css";
import Navbar from "../Navbar";
import Image from "next/image";
import Link from "next/link";

const UserAccountPage = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.userInfo}>
        <Image
          src="/images/RenaImage.png"
          height={140}
          width={140}
          alt="user profile picture"
        />
        <div className={styles.infoText}>
          <div className={styles.userName}>Rena Agarwal</div>
          <div className={styles.userLocation}>Bengaluru, India</div>
          <div className={styles.userCategory}>Student</div>
        </div>
      </div>
      <nav className={styles.userNav}>
        <ul className={styles.navList}>
          <li>Profile</li>
          <li>Certificates</li>
          <li>Courses</li>
          <li>Subscription</li>
          <li>
            <Link href="/" className={styles.logout}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.edit}>
        <div className={styles.editImage}>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.mySvg}
          >
            <path
              d="M30 0C13.44 0 0 13.44 0 30C0 46.56 13.44 60 30 60C46.56 60 60 46.56 60 30C60 13.44 46.56 0 30 0ZM30 9C34.98 9 39 13.02 39 18C39 22.98 34.98 27 30 27C25.02 27 21 22.98 21 18C21 13.02 25.02 9 30 9ZM30 51.6C22.5 51.6 15.87 47.76 12 41.94C12.09 35.97 24 32.7 30 32.7C35.97 32.7 47.91 35.97 48 41.94C44.13 47.76 37.5 51.6 30 51.6Z"
              fill="#E8E9ED"
            />
            <path
              d="M11.75 41.9362L11.7489 42.0138L11.7918 42.0784C15.7062 47.9651 22.4128 51.85 30 51.85C37.5872 51.85 44.2938 47.9651 48.2082 42.0784L48.2511 42.0138L48.25 41.9362C48.2261 40.3537 47.4158 38.9699 46.1598 37.7951C44.9049 36.6212 43.1879 35.6388 41.3014 34.8506C37.5294 33.2745 33.0192 32.45 30 32.45C26.9659 32.45 22.4556 33.2745 18.6873 34.8506C16.8026 35.6389 15.0884 36.6213 13.8358 37.7952C12.5821 38.9701 11.7739 40.3539 11.75 41.9362ZM0.25 30C0.25 13.5781 13.5781 0.25 30 0.25C46.4219 0.25 59.75 13.5781 59.75 30C59.75 46.4219 46.4219 59.75 30 59.75C13.5781 59.75 0.25 46.4219 0.25 30ZM39.25 18C39.25 12.8819 35.1181 8.75 30 8.75C24.8819 8.75 20.75 12.8819 20.75 18C20.75 23.1181 24.8819 27.25 30 27.25C35.1181 27.25 39.25 23.1181 39.25 18Z"
              stroke="black"
              stroke-opacity="0.4"
              stroke-width="0.5"
            />
          </svg>
          <p className={styles.uploadNew}>Upload new image</p>
        </div>
        <div className={styles.editElse}>
          <label htmlFor="change">Name</label>
          <input
            type="text"
            name="name"
            id="change"
            className={styles.inputFields}
            placeholder="Rena Agarwal"
          />
          <label htmlFor="change">Email Id</label>
          <input
            type="text"
            name="name"
            id="change"
            className={styles.inputFields}
            placeholder="rena.agarwal@gmail.com"
          />
        </div>
        <button className={styles.editSave}>save</button>
      </div>
    </div>
  );
};

export default UserAccountPage;
