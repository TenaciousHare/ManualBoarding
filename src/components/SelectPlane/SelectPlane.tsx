import { ChangeEvent, useContext } from "react";
import { SeatMapContext } from "../../context/SeatMapContext";
import { PLANES } from "../../constants";
import styles from "./SelectPlane.module.css";

export const SelectPlane = () => {
  const {
    state: { language },
    dispatch,
  } = useContext(SeatMapContext)!;
  const defaultValue = PLANES[0].type;
  return (
    <form>
      <label htmlFor="plane">
        {language ? "Wybierz typ samolotu: " : "Select the aircraft type: "}
      </label>
      <select
        name="plane"
        id="plane"
        className={styles.selectPlane}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          dispatch({ type: "select", value: event.currentTarget.value })
        }
        defaultValue={defaultValue}
      >
        {PLANES.map((PLANE) => (
          <option key={PLANE.name} value={PLANE.type}>
            {PLANE.name}
          </option>
        ))}
      </select>
    </form>
  );
};
