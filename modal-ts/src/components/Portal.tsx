import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
}

const Portal = ({ children }: Props): JSX.Element => {
  const rootElement = document.getElementById("modal-root") as HTMLElement;

  return <>{rootElement ? createPortal(children, rootElement) : children}</>;
};

export default Portal;
