import React from "react";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <a href="https://github.com/TenaciousHare/ManualBoarding">
          Repozytorium GitHub
        </a>
      </p>
      <p>
        <a href="https://github.com/TenaciousHare/ManualBoarding/blob/main/README.md">
          Dokumentacja
        </a>
      </p>
      <p>
        Copyright <span>&copy;</span> Paweł Zajączkowski 2024
      </p>
    </footer>
  );
};
