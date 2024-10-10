import { useState } from "react";
import { ModalContext } from "./ModalContext";
import { DetailedModal } from "../components/DetailedModal";
import { useTheme } from "@mui/material";

interface ModalContextProviderProps {
  children: JSX.Element;
}

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [pspId, setPspId] = useState("");
  const openModal = (pspId: string) => {
    setPspId(pspId);
    setIsOpen(true);
  };
  const closeModal = () => {
    setTimeout(() => {
      setPspId("");
    }, theme.transitions.duration.leavingScreen);
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ modalIsOpen: isOpen, openModal }}>
      {children}
      <DetailedModal open={isOpen} pspId={pspId} onClose={closeModal} />
    </ModalContext.Provider>
  );
};
