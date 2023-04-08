import styles from "./HomePage.module.css";
import { Aside, BackgroundElements, Main } from "./components";
import { GlobalContextProvider } from "./Context/store";
import DownloadIcon from "@mui/icons-material/Download";

type Props = {};

const HomePage: React.FC<Props> = () => {
  return (
    <GlobalContextProvider>
      <div className={styles["background"]}>
        <BackgroundElements />
        <div className={styles["canvas"]}>
          <Main />
          <Aside />
          <div className={styles["canvas-circle1"]}></div>
          <a className={styles["download-resume"]} href="/aldemcv.pdf" download>
            Download Resume
            <DownloadIcon className={styles["dl-resume-icon"]} />
          </a>
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default HomePage;
