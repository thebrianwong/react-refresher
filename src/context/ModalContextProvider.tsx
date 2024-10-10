import { useState } from "react";
import { ModalContext } from "./ModalContext";

interface ModalContextProviderProps {
  children: JSX.Element;
}

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <ModalContext.Provider value={{ modalOpen: isOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
