import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: beige;
  width: 100vw;
  height: 100vh;
`;

const LoadingContent = styled.div`
  font: inherit;
  color: #111111;
`;

const Loading = () => {
  return (
    <Wrapper>
      <LoadingContent>Loading</LoadingContent>
    </Wrapper>
  );
};

export default Loading;
