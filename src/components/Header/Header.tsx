import styles from "./Header.module.css";
import { HeaderProps } from "../../types/interfaces";

export const Header = ({ name, code }: HeaderProps) => {
  return (
    <>
      <div data-testid="code" className={styles.code}>
        {code}
      </div>
      <h1>{`Seat mapa - ${name}`}</h1>
    </>
  );
};
