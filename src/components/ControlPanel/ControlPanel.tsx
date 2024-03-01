import React from "react";
import styles from "./ControlPanel.module.css";

export interface ReactChildrenProps {
  children: React.ReactNode;
}

export const ControlPanel = ({ children }: ReactChildrenProps) => {
  return <div className={styles.controlPanel}>{children}</div>;
};
