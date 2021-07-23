import { FC } from "react";
import { Todo } from "../App";
import { TodoItem } from "./TodoItem";
import styled from "styled-components";

interface Props {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const StyledTodoList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
`;

export const TodoList: FC<Props> = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <StyledTodoList>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </StyledTodoList>
  );
};
