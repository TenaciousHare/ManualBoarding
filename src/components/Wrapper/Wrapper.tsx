import React from "react";
import styles from "./Wrapper.module.css";
import { WrapperProps } from "../../types/interfaces";

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  isColumn = false,
}) => {
  return (
    <div className={isColumn ? styles.column : styles.wrapper}>{children}</div>
  );
};
