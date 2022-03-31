import React, { ReactNode } from "react";
import Portal from "./Portal";

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return <Portal>{children}</Portal>;
};

export default Modal;
