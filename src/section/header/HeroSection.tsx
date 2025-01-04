import Button from "../../ui/Button";
import StarFillLarge from "../../assets/svgs/StarFillLarge";
import StarWhiteFill from "../../assets/imgs/star-white-fill.png";
import styles from "./styles.module.css";

export default function HeroSection() {
  return (
    <div className={styles["hero-section"]}>
      {/* Title */}
      <p className={styles["hero-section-title"]}>
        Revolutionize Your Hiring Process with{" "}
        <span className="text-gradient relative">
          Recruito AI
          <span className="absolute top-0 -right-16">
            <StarFillLarge />
          </span>
        </span>
      </p>

      {/* Description */}
      <p className="lg:w-[43rem]">
        Your fully automated hiring assistant that sources, screens, and
        interviews candidates effortlessly
      </p>

      {/* Actions */}
      <div className={styles["hero-section-action"]}>
        <Button>Start Your Free Trial</Button>
        <Button bg="gradient">
          <span className="flex items-center gap-2">
            <img src={StarWhiteFill} alt="white-star" />
            <span>Request a Demo</span>
          </span>
        </Button>
      </div>
    </div>
  );
}
