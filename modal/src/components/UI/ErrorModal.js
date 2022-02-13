import React from "react";
import Card from "./Card";
import Button from "./Button";
import styled from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const { title, message, onConfrim } = props;

  return (
    <>
      <div className={styled.backdrop} onClick={onConfrim}>
        <Card className={styled.modal}>
          <header className={styled.header}>
            <h2>{title}</h2>
          </header>
          <div className={styled.content}>
            <p>{message}</p>
          </div>
          <footer className={styled.action}>
            <Button onClick={props.onConfrim}>Okay</Button>
          </footer>
        </Card>
      </div>
    </>
  );
};
export default ErrorModal;
