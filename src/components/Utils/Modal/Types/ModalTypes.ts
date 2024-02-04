import { HTMLMotionProps } from "framer-motion";

interface ModalProps {
  children: React.ReactNode;
  handleClose: () => void;
}
interface ModalProps extends HTMLMotionProps<"div"> {}
export default ModalProps;
