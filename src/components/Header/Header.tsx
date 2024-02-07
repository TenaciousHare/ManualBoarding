import React from "react";
import styles from "./Header.module.css";
import { HeaderProps } from "../../types/interfaces";

export const Header: React.FC<HeaderProps> = ({ name, code }) => {
  return (
    <>
      <div className={styles.code}>{code}</div>
      <h1>{`Seat mapa - ${name}`}</h1>
    </>
  );
};
