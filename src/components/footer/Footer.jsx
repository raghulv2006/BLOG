import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>BotBlog</h1>
        </div>
        <p className={styles.desc}>
          "BotBlog is a super handy tool that helps you manage your blog all in one place.
           Whether you're blogging solo or working with a team, 
            it makes things way easier. You can schedule posts, 
            keep track of how your content is doing, and even 
            improve your SEO — all from one clean, simple dashboard."
        </p>
        <p className={styles.desc}>
          "It comes with customizable themes, tools for team collaboration,
           and detailed stats so you always know what’s working. 
           No more jumping between different apps or dealing with clunky interfaces. 
            BotBlog keeps everything smooth and organized 
          so you can focus on actually creating content."
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/x.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://www.facebook.com/raghul.kumar.14606/">Facebook</Link>
          <Link href="https://www.instagram.com/r_a_g_h_u_l_v/?hl=en">Instagram</Link>
          <Link href="https://x.com/specterfrozen?s=11">X</Link>
          <Link href="https://www.youtube.com/@pubgraghul9997">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
