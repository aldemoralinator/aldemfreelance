import styles from "./Contacts.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import AlternateEmailSharpIcon from "@mui/icons-material/AlternateEmailSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type Props = {};
const Contacts: React.FC<Props> = (Props) => {
  return (
    <div className={styles["contacts"]}>
      <div className={styles["contacts-list"]}>
        <div className={styles["contacts-item"]}>
          <CallIcon className={styles["label"]} />
          <a
            target="_blank"
            href="tel:+639666626006"
            className={styles["value"]}
          >
            +639666626006
          </a>
        </div>
        <div className={styles["contacts-item"]}>
          <AlternateEmailSharpIcon className={styles["label"]} />
          <a
            target="_blank"
            href="mailto:aldemoralinator@gmail.com"
            className={styles["value"]}
          >
            aldemoralinator@gmail.com
          </a>
        </div>
        <div className={styles["contacts-item"]}>
          <LinkedInIcon className={styles["label"]} />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/aldemdemoral/"
            className={styles["value"]}
          >
            linkedin.com/in/aldemdemoral
          </a>
        </div>
        <div className={styles["contacts-item"]}>
          <GitHubIcon className={styles["label"]} />
          <a
            target="_blank"
            href="https://github.com/aldemoralinator"
            className={styles["value"]}
          >
            github.com/aldemoralinator
          </a>
        </div>
        <div className={styles["contacts-item"]}>
          <InstagramIcon className={styles["label"]} />
          <a
            target="_blank"
            href="https://instagram.com/aldemoralinator"
            className={styles["value"]}
          >
            instagram.com/aldemoralinator
          </a>
        </div>
        <div className={styles["contacts-item"]}>
          <FacebookIcon className={styles["label"]} />
          <a
            target="_blank"
            href="https://facebook.com/aldemoralinator"
            className={styles["value"]}
          >
            facebook.com/aldemoralinator
          </a>
        </div>
      </div>
      <div className={styles["contacts-message"]}>
        Lets discuss and schedule a meeting.
      </div>
    </div>
  );
};

export default Contacts;
