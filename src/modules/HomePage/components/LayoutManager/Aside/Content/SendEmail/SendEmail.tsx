import { useGlobalContext } from "@/modules/HomePage/Context/store";
import styles from "./SendEmail.module.css";
import { hire } from "@/constants/pages";
import { useEffect, useState } from "react";
import Contacts from "../Contacts/Contacts";

type Props = {};

const SendEmail: React.FC<Props> = (Props) => {
  const { nav } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (nav == hire) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [nav]);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`${styles["send-email"]} ${
        isOpen ? styles["active"] : styles["inactive"]
      } `}
    >
      <div className={styles["tab"]} onClick={handleIsOpen}>
        {isOpen && <div className={styles["close-btn"]}>close</div>}
        Leave me a message!
      </div>
      <div
        className={`${styles["contacts"]} ${
          isOpen ? styles["contacts-active"] : styles["contacts-inactive"]
        } `}
      >
        <Contacts />
      </div>
    </div>
  );
};

export default SendEmail;
