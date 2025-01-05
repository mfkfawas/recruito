import logo from "../../assets/imgs/logo.png";
import SmallStar from "../../assets/svgs/StarFillSmallBrand";
import Button from "../../ui/Button";

import styles from "./styles.module.css";

export default function NavBar() {
  return (
    <nav className={styles["nav-bar"]}>
      <img
        src={logo}
        alt="logo-one"
        loading="lazy"
        className={styles["logo"]}
      />

      <ul className={styles["nav-list"]}>
        <li className="relative">
          <a href="#" className={`${styles["nav-link"]} text-gradient`}>
            <span>Home</span>

            <span className="absolute top-0 -right-2">
              <SmallStar />
            </span>
          </a>
        </li>
        <li>
          <a href="#" className={styles["nav-link"]}>
            Features
          </a>
        </li>
        <li>
          <a href="#" className={styles["nav-link"]}>
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className={styles["nav-link"]}>
            Resource
          </a>
        </li>
      </ul>

      <Button bg="gradient">Contact Us</Button>
    </nav>
  );
}
