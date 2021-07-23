import styled from "styled-components";

export const TextInput = styled.input.attrs({ type: "text" })`
  cursor: pointer;
  height: 50px;
  flex-grow: 1;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 1px 1px rgb(0, 0, 0, 0.4);
  padding-left: 0.5rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 2px rgb(0, 0, 0, 0.4);
  }
`;
