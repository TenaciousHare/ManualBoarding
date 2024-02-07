import styles from "./Header.module.css";

export const Header = ({ name, code }) => {
  return (
    <>
      <div className={styles.code}>{code}</div>
      <h1>{`Seat mapa - ${name}`}</h1>
    </>
  );
};
