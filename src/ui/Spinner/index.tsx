import styles from "./styles.module.css";

export default function Spinner() {
  return (
    <div className="w-full h-full grid place-items-center">
      <div className={styles["spinner"]}></div>
    </div>
  );
}
