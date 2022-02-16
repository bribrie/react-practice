import React from "react";
import Card from "./Card";
import Button from "./Button";
import styled from "./ErrorModal.module.css";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div className={styled.backdrop} onClick={props.onConfrim}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styled.modal}>
      <header className={styled.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styled.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styled.action}>
        <Button onClick={props.onConfrim}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop onConfrim={props.onConfrim} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfrim={props.onConfrim}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
