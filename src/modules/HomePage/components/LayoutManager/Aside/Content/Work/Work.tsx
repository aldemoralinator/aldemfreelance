import Card from "@/ui/Card/Card";
import styles from "./Work.module.css";
import GlassList from "@/modules/HomePage/components/LayoutManager/Aside/Content/Work/GlassList/GlassList";
import { WorkDetails } from "@/types/details";
import { WORK_DETAILS } from "@/constants/details";
import ClickWave from "@/ui/ClickWave/ClickWave";

type Props = {};

const Work: React.FC<Props> = (Props) => {
  return (
    <div className={styles["work"]}>
      <div className={styles["left"]}>
        <ClickWave />
      </div>
      <div className={styles["right"]}>
        <GlassList workList={WORK_DETAILS} />
      </div>
    </div>
  );
};

export default Work;
