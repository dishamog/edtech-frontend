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
          <img src="/userIcon.svg" alt="user icon" className={styles.mySvg} />
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
