import styles from "./Wrapper.module.css";
export const Wrapper = ({ children, isColumn = false }) => {
  return (
    <div className={isColumn ? styles.column : styles.wrapper}>{children}</div>
  );
};
