import { useContext } from "react";
import { CardContext } from "../contexts/CardContextDef";

export const useCards = () => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error("useCards must be used within a CardProvider");
  }
  return context;
};
