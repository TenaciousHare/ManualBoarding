import styles from "./Wrapper.module.css";
import { WrapperProps } from "../../types/interfaces";

export const Wrapper = ({ children, isColumn = false }: WrapperProps) => {
  return (
    <div className={isColumn ? styles.column : styles.wrapper}>{children}</div>
  );
};
