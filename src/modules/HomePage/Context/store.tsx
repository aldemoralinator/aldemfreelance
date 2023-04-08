"use client";

import { WORK_DETAILS } from "@/constants/details";
import { WorkDetails } from "@/types/details";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

interface ContextProps {
  nav: string;
  setNav: Dispatch<SetStateAction<string>>;
  workDetails: WorkDetails | null;
  setWorkDetails: Dispatch<SetStateAction<WorkDetails>>;
}

const GlobalContext = createContext<ContextProps>({
  nav: "",
  setNav: (): string => "",
  workDetails: null,
  setWorkDetails: (): WorkDetails => WORK_DETAILS[0],
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [nav, setNav] = useState("work");
  const [workDetails, setWorkDetails] = useState(WORK_DETAILS[0]);
  return (
    <GlobalContext.Provider
      value={{ nav, setNav, workDetails, setWorkDetails }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
