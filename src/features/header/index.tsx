import DockerPatternBottom from "../../assets/svgs/DockerPatternBottom";
import DockerPatternTop from "../../assets/svgs/DockerPatternTop";
import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <div className="absolute bottom-0 left-0">
        <DockerPatternTop />
      </div>
      <div className="absolute top-0 right-0">
        <DockerPatternBottom />
      </div>
    </header>
  );
}
