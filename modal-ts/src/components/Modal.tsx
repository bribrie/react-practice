import React, { ReactNode } from "react";
import Portal from "./Portal";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 46vh;
  left: 30vw;
  width: 35%;
  background-color: #e7cfcf;
  padding: 1rem;
  border-radius: 1rem;
  animation: scale-up-center 300ms ease-out forwards;

  @keyframes scale-up-center {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  color: #312b2b;
  font: inherit;
  font-size: 1.5rem;
  font-weight: 600;
`;

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: Props): JSX.Element => {
  return (
    <CSSTransition in={isOpen} timeout={200} classNames="modal" unmountOnExit>
      <Portal>
        <Overlay onClick={onClose}>
          <Backdrop>
            <Container>{children}</Container>
          </Backdrop>
        </Overlay>
      </Portal>
    </CSSTransition>
  );
};

export default Modal;
