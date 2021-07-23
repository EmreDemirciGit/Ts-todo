import { useReducer, useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";
import { AppContainer } from "./components/AppContainer";
import { Modal } from "./components/shared/Modal";
import { RoundedButton } from "./components/shared/RoundedButton";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type Actions =
  | { type: "add"; text: string }
  | {
      type: "remove";
      id: number;
    }
  | {
      type: "toggle";
      id: number;
    };

type State = Todo[];

const TodoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "add":
      const addedState = [
        ...state,
        { id: state.length + 1, text: action.text, done: false },
      ];
      localStorage.setItem("todos", JSON.stringify(addedState));
      return addedState;
    case "remove":
      const removedState = state.filter((todo) => action.id !== todo.id);
      localStorage.setItem("todos", JSON.stringify(removedState));
      return removedState;
    case "toggle":
      const toggledState = state.map((todo) => ({
        ...todo,
        done: todo.id === action.id ? !todo.done : todo.done,
      }));
      localStorage.setItem("todos", JSON.stringify(toggledState));
      return toggledState;
  }
};

const AddTodoButton = styled(RoundedButton)`
  position: absolute;
  bottom: -25px;
`;

function App() {
  const addTodo = (text: string) => {
    try {
      dispatch({ type: "add", text: text });
      closeTodoModal();
    } catch (e) {
      console.error(e);
    }
  };

  const removeTodo = (id: number) => {
    dispatch({ type: "remove", id });
  };

  const toggleTodo = (id: number) => {
    dispatch({ type: "toggle", id });
  };

  const openTodoModal = () => {
    setTodoModalOpen(true);
  };

  const closeTodoModal = () => {
    setTodoModalOpen(false);
  };

  let storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  const [todos, dispatch] = useReducer(TodoReducer, storedTodos || []);
  const [todoModalOpen, setTodoModalOpen] = useState(false);
  const modalRef = useRef(null);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target !== modalRef.current) return;
      closeTodoModal();
    });
  }, []);

  return (
    <AppContainer className="App">
      <Modal ref={modalRef as any} size="sm" isOpen={todoModalOpen}>
        <TodoForm
          placeholder="Type something to do"
          ariaLabel="What needs to be done?"
          onSubmit={(title) => {
            addTodo(title);
          }}
        />
      </Modal>

      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />

      <AddTodoButton primary onClick={() => openTodoModal()}>
        +
      </AddTodoButton>
    </AppContainer>
  );
}

export default App;
