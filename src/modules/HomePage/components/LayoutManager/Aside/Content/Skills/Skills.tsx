import { Skill } from "@/types/details";
import styles from "./Skills.module.css";
import { SKILLS } from "@/constants/details";
import ClickWave from "@/ui/ClickWave/ClickWave";

type Props = {};
type SkillBarProps = {
  skill: Skill;
};

const Skills: React.FC<Props> = (Props) => {
  const SkillBar: React.FC<SkillBarProps> = (SkillBarProps) => {
    const {
      skill: { level, name, type },
    } = SkillBarProps;
    return (
      <div
        className={`${styles["bar"]} ${styles[type]} ${styles[level]}`}
        data-skill={name}
      ></div>
    );
  };

  return (
    <div className={styles["skills"]}>
      <div className={styles["left"]}>
        <ClickWave />
      </div>
      <div className={styles["right"]}>
        <div className={`${styles["container"]}`}>
          {SKILLS.map((x, i) => (
            <SkillBar key={i} skill={x} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
