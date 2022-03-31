import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
}

const Portal = ({ children }: Props) => {
  const rootElement = document.getElementById("modal-root");

  // createPortal(rootElement)
  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
};

export default Portal;
