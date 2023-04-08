import Image from "next/image";
import { useRouter } from "next/router";
import Intro from "./Intro/Intro";
import styles from "./Main.module.css";

type Props = {};

const Main: React.FC<Props> = (Props) => {
  const router = useRouter();
  const path: string | undefined = router.query.page?.toString();
  return (
    <main className={styles["main"]}>
      <div className={styles["nav-label-container"]}>
        <div className={styles["nav-label"]}>{path}</div>
      </div>
      <div className={styles["image-container"]}>
        <Image
          className={styles["image"]}
          src="/main-animation.png"
          alt="Animated Picture of the author"
          layout="fill" // tech debt
          objectFit="cover" // tech debt
          sizes="" // tech debt
        />
        <div className={styles["image-container-glass1"]}></div>
        <div className={styles["image-container-glass2"]}>
          <Intro />
        </div>
        {/* <div className={styles["image-container-glass3"]}>3</div> */}
        {/* <div className={styles["image-container-glass4"]}>4</div> */}
        <div className={styles["image-container-glass5"]}></div>
        {/* <div className={styles["image-container-glass6"]}>6</div> */}
      </div>
    </main>
  );
};

export default Main;
