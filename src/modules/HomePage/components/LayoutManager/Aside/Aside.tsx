import styles from "./Aside.module.css";
import Content from "./Content/Content";
import { useGlobalContext } from "@/modules/HomePage/Context/store";
import SendEmail from "./Content/SendEmail/SendEmail";
import Navigation from "./Navigation/Navigation";

type Props = {};

const Aside: React.FC<Props> = (props) => {
  const { nav } = useGlobalContext();

  return (
    <aside className={styles["aside"]}>
      <div className={styles["image-container-glass3"]}>
        <div className={styles["glass3-nav"]}>{nav}</div>
      </div>
      <div className={styles["image-container-glass4"]}>
        <div className={styles["glass4-nav"]}>{nav}</div>
      </div>
      <div className={styles["image-container-glass6"]}>
        <div className={styles["glass6-nav"]}>{nav}</div>
      </div>
      <SendEmail />
      <section className={styles["nav-and-article"]}>
        <Navigation />
        <article className={styles["article"]}>
          <Content />
        </article>
      </section>
    </aside>
  );
};

export default Aside;
