import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/travel.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Travel is the act of moving from one place to another, usually for exploration, leisure, work, or personal growth.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Raghu Bharathi</span>
            <span className={styles.date}> - 03.05.2005</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/culture.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Culture is the shared beliefs, values, customs, and behaviors that shape how a group of people live and interact.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Niraj </span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/food.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Food is any substance we eat or drink to nourish our body, satisfy hunger, and enjoy flavors.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Preveen</span>
            <span className={styles.date}> - 31.012.2005</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/fashion.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Fashion is the expression of style through clothing, accessories, and trends that reflect personality, culture, and time.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Raghul</span>
            <span className={styles.date}> - 17.03.2006</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
