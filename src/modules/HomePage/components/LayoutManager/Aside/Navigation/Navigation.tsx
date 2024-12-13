import PAGES from "@/constants/pages";
import { Page } from "@/types/navigation";
import NavLabels from "./NavLabels/NavLabels";
import styles from "./Navigation.module.css";
import { useState } from "react";
import { useGlobalContext } from "@/modules/HomePage/Context/store";
import TouchAppIcon from '@mui/icons-material/TouchApp';

type Props = {};

type TileProps = {
  page: Page;
  className: string;
  isInitial?: boolean;
};

const Navigation: React.FC<Props> = (Props) => {
  const { setNav } = useGlobalContext();
  const [isInitial, setIsInitial] = useState(true);

  const handleTileClick = (page: string) => {
    setNav(page);
    setIsInitial(false);
  };

  const Tile = (tileProps: TileProps) => {
    return (
      <div className={styles["nav-tiles-item"]}>
        <div
          className={styles[tileProps.className]}
          onClick={() => handleTileClick(tileProps.page.name)}
        >
          {tileProps.isInitial && 
            <div className={styles["click"]}>
              <div className={styles["click-label"]}>skills</div>
              <TouchAppIcon className={styles["click-icon"]}/>
            </div>
          }

          {/* {tileProps.isInitial && <div className={styles["click"]}>click!</div>} */}
        </div>
      </div>
    );
  };

  return (
    <nav className={styles["nav"]}>
      <NavLabels />
      <div className={styles["nav-tiles"]}>
        <Tile page={PAGES[0]} className="purple2" />
        <Tile page={PAGES[1]} className="orange" isInitial={isInitial} />
        <Tile page={PAGES[2]} className="blue1" />
        <Tile page={PAGES[3]} className="pink" />
      </div>
    </nav>
  );
};

export default Navigation;
