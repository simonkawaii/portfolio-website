import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import ModalWrapper from "./Wrapper";
import ModalProps from "./Types/ModalTypes";

interface ModalWrapperProps extends ModalProps {
  isOpen: boolean;
}

const Modal: React.FC<ModalWrapperProps> = ({
  className,
  children,
  isOpen,
  handleClose,
  ...props
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modalOpened");
    } else {
      document.body.classList.remove("modalOpened");
    }

    return () => {
      document.body.classList.remove("modalOpened");
    };
  }, [isOpen]);

  return (
    <AnimatePresence
      initial={false}
      mode="wait"
      onExitComplete={() => {
        return null;
      }}
    >
      {isOpen && (
        <ModalWrapper
          {...props}
          className={className}
          handleClose={handleClose}
        >
          {children}
        </ModalWrapper>
      )}
    </AnimatePresence>
  );
};

export default Modal;
