import { FC, useState } from "react";
import styled from "styled-components";
import { TextInput } from "./shared/TextInput";

interface Props {
  placeholder: string;
  ariaLabel: string;
  onSubmit: (text: string) => void;
}

const Form = styled.form`
  display: flex;
  flex-grow: 1;
  align-self: center;
`;

export const TodoForm: FC<Props> = ({ placeholder, ariaLabel, onSubmit }) => {
  const [todoBody, setTodoBody] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(todoBody);
        setTodoBody("");
      }}
    >
      <TextInput
        name="todoBody"
        aria-label={ariaLabel}
        placeholder={placeholder}
        value={todoBody}
        onChange={(e) => {
          setTodoBody(e.target.value);
        }}
      />
    </Form>
  );
};
