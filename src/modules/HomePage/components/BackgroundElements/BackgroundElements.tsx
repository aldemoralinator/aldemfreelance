import styles from "./BackgroundElements.module.css";

type Props = {};

const BackgroundElements: React.FC<Props> = (Props) => {
  return (
    <div className={styles["background-elements"]}>
      <div className={styles["bge-circle1"]}></div>
      <div className={styles["bge-circle2"]}></div>
      <div className={styles["bge-circle3"]}></div>
    </div>
  );
};

export default BackgroundElements;
