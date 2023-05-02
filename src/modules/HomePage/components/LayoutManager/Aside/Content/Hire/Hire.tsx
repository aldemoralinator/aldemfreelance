import styles from "./Hire.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import ClickWave from "@/ui/ClickWave/ClickWave";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
            <a target="_blank" href="https://www.linkedin.com/in/aldemdemoral/">
              <LinkedInIcon className={styles["socials-icon"]} />
            </a>

            <a target="_blank" href="https://github.com/aldemoralinator">
              <GitHubIcon className={styles["socials-icon"]} />
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/aldemoralinator/"
            >
              <InstagramIcon className={styles["socials-icon"]} />
            </a>

            <a target="_blank" href="https://www.facebook.com/aldemoralinator/">
              <FacebookIcon className={styles["socials-icon"]} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hire;
