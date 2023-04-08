import { SnapShot } from "@/types/effects";
import TypingText from "@/ui/TypingText/TypingText";
import { useEffect, useState } from "react";
import styles from "./Intro.module.css";

type Props = {};

const SNAP_SHOTS: SnapShot[] = [
  { content: "H", delay: 500 },
  { content: "Hi", delay: 800 },
  { content: "Hi,", delay: 100 },
  { content: "Hi, T", delay: 50 },
  { content: "Hi, Th", delay: 50 },
  { content: "Hi, The", delay: 80 },
  { content: "Hi, Ther", delay: 80 },
  { content: "Hi, There!", delay: 80 },
  { content: "Hi, There", delay: 800 },
  { content: "Hi, Ther", delay: 10 },
  { content: "Hi, The", delay: 10 },
  { content: "Hi, Th", delay: 10 },
  { content: "Hi, T", delay: 10 },
  { content: "Hi, ", delay: 10 },
  { content: "Hi,", delay: 10 },
  { content: "Hi", delay: 10 },
  { content: "H", delay: 10 },
  { content: "", delay: 10 },

  { content: "A", delay: 100 },
  { content: "Al", delay: 50 },
  { content: "Ald", delay: 100 },
  { content: "Alde", delay: 100 },
  { content: "Aldem", delay: 100 },
  { content: "Aldem D", delay: 100 },
  { content: "Aldem De", delay: 70 },
  { content: "De", delay: 50 },
  { content: "Dem", delay: 200 },
  { content: "Demo", delay: 100 },
  { content: "Demor", delay: 50 },
  { content: "Demor", delay: 100 },
  { content: "Demora", delay: 50 },
  { content: "Demoral", delay: 100 },
  { content: "Demoral H", delay: 50 },
  { content: "Demoral He", delay: 50 },

  { content: "H", delay: 80 },
  { content: "He", delay: 50 },
  { content: "Her", delay: 50 },
  { content: "Here", delay: 100 },
  { content: "Here!", delay: 100 },
  { content: "Here!", delay: 1000 },

  { content: "F", delay: 100 },
  { content: "Fu", delay: 50 },
  { content: "Ful", delay: 80 },
  { content: "Full", delay: 100 },
  { content: "Fulls", delay: 10 },
  { content: "Fullst", delay: 50 },
  { content: "Fullsta", delay: 100 },
  { content: "Fullstac", delay: 200 },
  { content: "Fullstack", delay: 100 },
  { content: "Fullstack W", delay: 50 },
  { content: "Fullstack We", delay: 100 },
  { content: "Web", delay: 50 },
  { content: "Web De", delay: 100 },
  { content: "Web De", delay: 100 },
  { content: "Web Dev", delay: 50 },
  { content: "Web Deve", delay: 80 },
  { content: "Web Devel", delay: 100 },
  { content: "Web Develo", delay: 50 },
  { content: "Web Develop", delay: 100 },
  { content: "Web Develope", delay: 100 },
  { content: "Web Developer", delay: 100 },
  { content: "Web Developer", delay: 10000 },
];

const Intro: React.FC<Props> = (Props) => {
  return (
    <div className={styles["background"]}>
      <div className={styles["text"]}>
        <TypingText snapShots={SNAP_SHOTS} />
      </div>
      <div className={styles["name"]}>Aldem Demoral (swe)</div>
    </div>
  );
};

export default Intro;
