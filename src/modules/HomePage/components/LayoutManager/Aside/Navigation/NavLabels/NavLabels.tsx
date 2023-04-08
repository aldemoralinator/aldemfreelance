import { about, hire, skills, work } from "@/constants/pages";
import styles from "./NavLabels.module.css";
import { useGlobalContext } from "@/modules/HomePage/Context/store";

type Props = {};
type NavLetterProps = {
  letter: Letter;
};

type Letter = {
  id: string;
  letter: string;
  color?: string;
  isCaps?: boolean;
};

type Word = {
  id: string;
  letters: string[];
  color: string;
};

const LETTERS: Letter[] = [
  { id: "S1", letter: "S" },
  { id: "k", letter: "k" },
  { id: "i", letter: "i" },
  { id: "l1", letter: "l" },
  { id: "l2", letter: "l" },
  { id: "s2", letter: "s" },
  { id: "W", letter: "W" },
  { id: "o", letter: "o" },
  { id: "r", letter: "r" },
  { id: "A", letter: "A" },
  { id: "b", letter: "b" },
  { id: "u", letter: "u" },
  { id: "t", letter: "t" },
  { id: "H", letter: "H" },
  { id: "e", letter: "e" },
];

const WORDS: Word[] = [
  { id: work, letters: ["W", "o", "r", "k"], color: "purple2" },
  { id: about, letters: ["A", "b", "o", "u", "t"], color: "blue1" },
  { id: hire, letters: ["H", "i", "r", "e"], color: "pink" },
  { id: skills, letters: ["S1", "k", "i", "l1", "l2", "s2"], color: "orange" },
];

const NavLabels: React.FC<Props> = (Props) => {
  const { nav, setNav } = useGlobalContext();

  const NavLetter: React.FC<NavLetterProps> = (navLetter: NavLetterProps) => {
    const { letter } = navLetter;
    const className = `nav-labels-letter-${letter.id}`;
    let finalClassName = `${styles[className]}`;
    if (letter.color)
      finalClassName = finalClassName
        .concat(" ")
        .concat(`${styles[letter.color]}`);
    return <div className={finalClassName}>{letter.letter}</div>;
  };

  const NavWord: React.FC<Props> = () => {
    let updatedLetters = LETTERS;
    updatedLetters.map((letter) => {
      const word = WORDS.find((word) => word.id === nav);
      letter.color = word?.letters.includes(letter.id) ? word.color : undefined;
    });

    return (
      <>
        {updatedLetters.map((letter) => (
          <NavLetter key={letter.id} letter={letter} />
        ))}
      </>
    );
  };

  return (
    <div className={styles["nav-labels"]}>
      <NavWord />
    </div>
  );
};

export default NavLabels;
