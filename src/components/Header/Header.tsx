import styles from "./Header.module.css";
export interface HeaderProps {
  name: string;
  code: string;
  isChecked: boolean;
  onChange: () => void;
}

export const Header = ({ name, code, isChecked, onChange }: HeaderProps) => {
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
          checked={isChecked}
          onChange={onChange}
          className={styles.check}
          aria-label="Choose language"
        />
        <span>PL</span>
      </div>
      {isChecked ? (
        <h1>{`Seat mapa - ${name}`}</h1>
      ) : (
        <h1>{`Seat map - ${name}`}</h1>
      )}
    </>
  );
};
