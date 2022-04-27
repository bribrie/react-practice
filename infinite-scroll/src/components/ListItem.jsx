import styled from "styled-components";

const Wrapper = styled.li`
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin: 1rem;
  box-shadow: rgba(125, 125, 131, 0.2) 0px 7px 29px 0px;
  border-radius: 6px;
`;

const Text = styled.span`
  text-align: center;
  font: inherit;
  color: #292929;
  margin: auto 0;
`;

const ListItem = ({ text }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default ListItem;
