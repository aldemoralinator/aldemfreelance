import styles from "./Hire.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import ClickWave from "@/ui/ClickWave/ClickWave";

type Props = {};

const Hire: React.FC<Props> = (Props) => {
  return (
    <div className={styles["hire"]}>
      <div className={styles["left"]}>
        <ClickWave />
      </div>
      <div className={styles["right"]}>
        <div className={styles["message"]}>
          Why
          <br />
          not?
        </div>
        <div className={styles["socials"]}>
          <span className={styles["socials-label"]}>Follow me on:</span>
          <span className={styles["socials-links"]}>
            <FacebookIcon className={styles["socials-icon"]} />
            <TwitterIcon className={styles["socials-icon"]} />
            <InstagramIcon className={styles["socials-icon"]} />
            <GitHubIcon className={styles["socials-icon"]} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hire;
