"use client";

import Image from "next/image";
import styles from "./home.module.css";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const notionUrl = "https://celestial-fridge-0af.notion.site/119ce6046a1580ddafb5e956678ca174?v=95b9086d012d4e7f88b061186a20d43d";

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hi there👋, I am Ayaan</h1>
      <h2 className={styles.subheading}>
        <Typewriter
          words={['Software Developer', 'Musician', 'Traveler']}
          loop={0} // Infinite loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>

      <hr className={styles.divider} />

      <div className={styles.info}>
        <p>
          The website is work in progress 👨🏻‍💻🛠️. Trying to build it using <b>NextJS</b>.
        </p>
        <p>
          Until then, we have our trusty <b>Notion</b> to handle the content management part.
        </p>
      </div>

      <hr className={styles.divider} />

      <a href={notionUrl} target="_blank" rel="noopener noreferrer">
        <button className={styles.button}>Take me to Notion →</button>
      </a>
    </div>
  );
}
