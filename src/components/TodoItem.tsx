import { FC } from "react";
import { Todo } from "../App";
import styled from "styled-components";

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const StyledTodoItem = styled.li<{ todo: Todo }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
  color: ${(props) => (props.todo.done ? "#cfd1d8" : "#666972")};
  user-select: none;
  height: 30px;
  margin: 5px auto;
  text-decoration: ${(props) => (props.todo.done ? "line-through" : "none")};
`;

const StyledLabel = styled.label`
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const RemoveTodoButton = styled.div`
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 15px;
  height: 15px;
  border: 2px solid #c63333;
  border-radius: 4px;
  background: transparent;
  margin-right: 5px;
  margin-top: -6px;
  color: #c63333;
  cursor: pointer;

  &:before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 2px;
    background: currentColor;
    border-radius: 5px;
    top: 5px;
    left: 2px;
  }
`;

export const TodoItem: FC<Props> = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <StyledTodoItem todo={todo}>
      <RemoveTodoButton
        onClick={() => {
          removeTodo(todo.id);
        }}
      />
      <StyledLabel htmlFor={`done${todo.id}`}>{todo.text}</StyledLabel>
      <input
        onChange={() => {
          toggleTodo(todo.id);
        }}
        type="checkbox"
        id={`done${todo.id}`}
        checked={todo.done}
      />
    </StyledTodoItem>
  );
};
