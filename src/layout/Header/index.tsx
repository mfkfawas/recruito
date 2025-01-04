import { PropsWithChildren } from "react";

import DockerPatternTop from "../../assets/svgs/DockerPatternTop";
import DockerPatternBottom from "../../assets/svgs/DockerPatternBottom";

import styles from "./styles.module.css";

export default function Header({ children }: PropsWithChildren) {
  return (
    <header className={styles["container"]}>
      <div className="absolute bottom-0 left-0">
        <DockerPatternTop />
      </div>
      <div className="absolute top-0 right-0">
        <DockerPatternBottom />
      </div>
      {children}
    </header>
  );
}
