import { useContext } from "react";
import { SeatMapContext } from "../../context/SeatMapContext";
import { BUTTONS_VALUES } from "../../constants";
import { Button } from "../Button/Button";
import styles from "./ButtonGroup.module.css";

export const ButtonGroup = () => {
  const {
    state: { language },
  } = useContext(SeatMapContext)!;
  return (
    <div className={styles.btnGroup}>
      {BUTTONS_VALUES.map((button) => {
        return (
          <Button
            key={button.name}
            name={button.name}
            language={language ? button.pl : button.en}
          />
        );
      })}
    </div>
  );
};
