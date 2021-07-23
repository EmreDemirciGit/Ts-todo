import styled from "styled-components";

interface Props {
  primary?: boolean;
}

export const RoundedButton = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: white;
  background-color: ${(props) => (props.primary ? "#1F8627" : "#3f3f3")};
  border-radius: 50px;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;
