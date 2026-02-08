import React, { useState } from "react";

type QuizContextType = {
  score: number;
  setScore: (value: number) => void;
  total: number;
  setTotal: (value: number) => void;
};
export const QuizContext = React.createContext<QuizContextType>({
  score: 0,
  setScore: () => {},
  total: 0,
  setTotal: () => {},
});

export  const toMyanmarNumber = (num ? : number) => {
  if (num === undefined || num === null) return "၀";
    const myanmarDigits = ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"];
    return num
      .toString()
      .split("")
      .map((d) => myanmarDigits[Number(d)])
      .join("");
  };

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

 

  return (
    <QuizContext.Provider value={{ score, setScore, total, setTotal }}>
      {children}
    </QuizContext.Provider>
  );
};
