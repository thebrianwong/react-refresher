import { createContext } from "react";

export const ModalContext = createContext({
  modalIsOpen: false,
  openModal: (_pspId: string) => {},
});
