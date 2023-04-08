import { SnapShot } from "@/types/effects";
import { useEffect, useState } from "react";

type Props = {
  snapShots: SnapShot[];
};

const TypingText: React.FC<Props> = (Props) => {
  const { snapShots } = Props;
  const [text, setText] = useState("");

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function snapShotFunc(snapShot: SnapShot) {
    await sleep(snapShot.delay);
    setText(snapShot.content);
  }

  async function delayedGreeting() {
    while (true) {
      for (let i = 0; i < snapShots.length; i++) {
        await snapShotFunc(snapShots[i]);
      }
    }
  }

  useEffect(() => {
    delayedGreeting();
  }, []);

  return <>{text}</>;
};

export default TypingText;
