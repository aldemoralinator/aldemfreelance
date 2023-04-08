import { WorkDetails } from "@/types/details";
import styles from "./GlassList.module.css";
import { ReactNode, useState } from "react";

type Props = {
  workList: WorkDetails[];
};

type ItemProps = {
  work: WorkDetails;
};

type StackProps = {
  stack: string;
};

const GlassList: React.FC<Props> = (Props) => {
  const { workList } = Props;

  const Item: React.FC<ItemProps> = (ItemProps) => {
    const { work } = ItemProps;

    const Stack: React.FC<StackProps> = (StackProps) => {
      const { stack } = StackProps;
      return (
        <div
          className={`${styles["stack-item"]} ${styles[stack.toLowerCase()]}`}
        >
          {stack}
        </div>
      );
    };

    return (
      <div className={styles["item"]}>
        <div className={styles["company"]}>{work.company}</div>
        <div className={styles["position"]}>{work.position}</div>
        <div className={styles["see-more"]}>
          <div className={styles["details"]}>{work.details}</div>
          <div className={styles["links"]}>
            {work.links.map((link, i) => (
              <a key={i} href={link.url} target="_blank">
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className={styles["stacks"]}>
          {work.tags.map((x, i) => (
            <Stack key={i} stack={x} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={styles["list"]}>
      {workList.map((x, i) => (
        <Item key={i} work={x} />
      ))}
    </div>
  );
};

export default GlassList;
