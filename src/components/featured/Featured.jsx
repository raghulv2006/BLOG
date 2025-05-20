import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, BotBlogs here!</b> Discover my stories and creative ideas.2
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/bb.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>𝘈 𝘞𝘰𝘳𝘭𝘥 𝘪𝘯 𝘸𝘩𝘪𝘤𝘩 "𝘞𝘰𝘳𝘥𝘴" 𝘦𝘷𝘰𝘭𝘷𝘦 𝘢𝘯𝘥 "𝘋𝘳𝘦𝘢𝘮𝘴" 𝘶𝘯𝘧𝘰𝘭𝘥.</h1>
          <p className={styles.postDesc}>
            BotBlogs is a thoughtfully designed, easy-to-use space
            where anyone can share their thoughts, stories, and experiences 
            without any hassle.Built with both writers and readers
            in mind, it combines a clean look with smart features
            to make every post feel meaningful and beautifully
            presented.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
