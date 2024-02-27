import { useContext } from "react";
import styles from "./Header.module.css";
import { SeatMapContext } from "../../context/SeatMapContext";

export const Header = () => {
  const {
    state: {
      plane: { name },
      code,
      language,
    },
    dispatch,
  } = useContext(SeatMapContext)!;
  return (
    <>
      <div data-testid="code" className={styles.code}>
        {code}
      </div>
      <div className={styles.language}>
        <span>EN</span>
        <input
          id="language"
          type="checkbox"
          checked={language}
          onChange={() => dispatch({ type: "language", language: language })}
          className={styles.check}
          aria-label="Choose language"
        />
        <span>PL</span>
      </div>
      {language ? (
        <h1>{`Seat mapa - ${name}`}</h1>
      ) : (
        <h1>{`Seat map - ${name}`}</h1>
      )}
    </>
  );
};
