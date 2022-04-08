import { useState } from "react";
import Modal from "./components/Modal";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #fae1e18b;
`;

const Button = styled.button`
  width: 20rem;
  height: 3rem;
  border: none;
  color: white;
  font-size: inherit;
  font-weight: 600;
  background-color: #a57cec;
  cursor: pointer;

  &:hover {
    background-color: #c9acfb;
    color: #504646;
  }
`;

function App(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const BUTTON_MESSAGE = isOpen ? "CLOSE MODAL" : "OPEN MODAL!";

  return (
    <Container>
      <Button onClick={handleOpen}>{BUTTON_MESSAGE}</Button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={handleClose}>
          Modal content
        </Modal>
      )}
    </Container>
  );
}

export default App;
