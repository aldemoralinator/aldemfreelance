import { about, hire, skills, work } from "@/constants/pages";
import Work from "./Work/Work";
import Skills from "./Skills/Skills";
import Hire from "./Hire/Hire";
import About from "./About/About";
import { useGlobalContext } from "@/modules/HomePage/Context/store";

type Props = {};

const Content: React.FC<Props> = (Props) => {
  const { nav } = useGlobalContext();
  if (nav == work) return <Work />;
  if (nav == skills) return <Skills />;
  if (nav == about) return <About />;
  if (nav == hire) return <Hire />;
  return <></>;
};

export default Content;
