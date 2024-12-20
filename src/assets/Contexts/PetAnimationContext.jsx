import { createContext, useContext, useState } from "react";

const PetAnimationContext = createContext();

export const PetAnimationProvider = ({ children }) => {
  const [openMouth, setOpenMouth] = useState(false);
  const [petEating, setPetEating] = useState(false);

  const handlePetMouthOpen = (e) => {
    setOpenMouth(!openMouth);
  };

  const handlePetEating = (e) => {
    setPetEating(!petEating);
  };

  return <PetAnimationContext.Provider value={{ openMouth, setPetEating, handlePetMouthOpen, handlePetEating }}>{children}</PetAnimationContext.Provider>;
};

export const usePetAnimationCtx = () => useContext(PetAnimationContext);
