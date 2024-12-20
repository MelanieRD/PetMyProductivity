import { createContext, useContext, useState } from "react";

const PetAnimationContext = createContext();

export const PetAnimationProvider = ({ children }) => {
  const [dropCorrectly, setDropCorrectly] = useState(false);
  const [openMouth, setOpenMouth] = useState(false);
  const [petEating, setPetEating] = useState(false);

  const handleDropCorrectly = () => {
    setDropCorrectly(!dropCorrectly);
  };

  const handlePetMouthOpen = () => {
    setOpenMouth(!openMouth);
  };

  const handlePetEating = () => {
    setPetEating(!petEating);
  };

  return <PetAnimationContext.Provider value={{ dropCorrectly, handleDropCorrectly, openMouth, petEating, handlePetMouthOpen, handlePetEating }}>{children}</PetAnimationContext.Provider>;
};

export const usePetAnimationCtx = () => useContext(PetAnimationContext);
