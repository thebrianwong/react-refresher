import { useState } from "react";
import { ModalContext } from "./ModalContext";
import { DetailedModal } from "../components/DetailedModal";

interface ModalContextProviderProps {
  children: JSX.Element;
}

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pspId, setPspId] = useState("");
  const openModal = (pspId: string) => {
    setPspId(pspId);
    setIsOpen(true);
  };
  const closeModal = () => {
    setPspId("");
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ modalIsOpen: isOpen, openModal }}>
      {children}
      <DetailedModal open={isOpen} pspId={pspId} onClose={closeModal} />
    </ModalContext.Provider>
  );
};
