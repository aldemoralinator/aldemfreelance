import Image from "next/image";
import styles from "./ClickWave.module.css";

type Props = {};

const ClickWave: React.FC<Props> = (Props) => {
  return (
    <>
      <div className={styles["container"]}>
        <Image
          // style={{ objectFit: "cover" }}
          // loader={myLoader} // tech debt
          src="/astronaut.png"
          alt="Picture of the author"
          width={300}
          height={300}
        />
      </div>
    </>
  );
};

export default ClickWave;
