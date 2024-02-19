import React from "react";
import styles from "./Wrapper.module.css";

export interface WrapperProps {
  children: React.ReactNode;
  isColumn?: boolean;
}

export const Wrapper = ({ children, isColumn = false }: WrapperProps) => {
  return (
    <div className={isColumn ? styles.column : styles.wrapper}>{children}</div>
  );
};
