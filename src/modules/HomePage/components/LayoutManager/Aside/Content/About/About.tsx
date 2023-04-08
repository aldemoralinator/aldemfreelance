import Image from "next/image";
import styles from "./About.module.css";

type Props = {};

const About: React.FC<Props> = (Props) => {
  return (
    <div className={styles["about"]}>
      <div className={styles["left"]}>
        <div className={styles["image-container"]}>
          <Image
            // style={{ objectFit: "cover" }}
            // loader={myLoader} // tech debt
            src="/about2.jpg"
            alt="Picture of the author"
            width={185}
            height={231}
          />
        </div>
      </div>
      <div className={styles["right"]}>
        <div className={styles["message"]}>
          <div className={styles["sign"]}>
            &#10075;&#10076;&nbsp;&#10075;&#10076;
          </div>
          <br /> Keep doing your best on everything. <br />
          <br />
          When all your lights are out, when your moon is forever waning. <br />
          <br />
          You finally be sleeping knowing you&#10076;ve lived with a meaning{" "}
          <br />
          <br />
          <br />
          <div className={styles["sign"]}>
            - some creepy stranger on the subway
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
