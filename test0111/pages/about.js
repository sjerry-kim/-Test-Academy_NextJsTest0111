import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const About = () => {
  const [text, setText] = useState("");
  return (
    <main className={styles.main}>
      <div className={styles.aboutdiv}>
        <h2 className={styles.abouth2}>about페이지입니다</h2>
        <p>아래 input에 값을 넣으면 값이 바뀝니다</p>
        <p className={styles.result}>: {text}</p>
        <input
          className={styles.input}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Link className={styles.link} href="/">Main페이지로 이동</Link>
      </div>
    </main>
  );
};

export default About;
