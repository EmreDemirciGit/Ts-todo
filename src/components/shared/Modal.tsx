import { FC, forwardRef } from "react";
import styled from "styled-components";

interface Props {
  size?: "sm" | "md" | "lg";
  isOpen: boolean;
  ref: any;
}

const ModalDialog = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div<{ size: "sm" | "md" | "lg" }>`
  display: flex;
  background-color: #fefefe;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem;
  border: 1px solid #888;
  border-radius: 5px;
  width: ${(props) => {
    switch (props.size) {
      case "sm":
        return "45%";
      case "lg":
        return "80%";
      case "md":
      default:
        return "60%";
    }
  }};
`;

export const Modal: FC<Props> = forwardRef(
  ({ children, isOpen = false, size = "md" }, ref) => {
    return (
      <ModalDialog ref={ref as any} isOpen={isOpen}>
        <ModalContent size={size}>{children}</ModalContent>
      </ModalDialog>
    );
  }
);
