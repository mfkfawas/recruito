import Container from "../../layout/Container";
import logo from "../../assets/imgs/logo.png";
import facebook from "../../assets/imgs/fb.png";
import twitter from "../../assets/imgs/x.png";
import linkedin from "../../assets/imgs/in.png";
import instagram from "../../assets/imgs/insta.png";

export default function Footer() {
  return (
    <footer className="bg-[#848EA00D] py-16">
      <Container>
        <div className="flex justify-between items-center gap-16">
          <div className="flex flex-col gap-8">
            <img src={logo} alt="logo" className="w-[15.6rem]" />
            <p className="text-[1.4rem] font-medium leading-[2.2rem] text-[var(--color-text-light)]">
              &copy; 2024 Recruito AI. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex gap-8">
              <img
                src={facebook}
                alt="facebook"
                className="w-[2rem] h-[2rem]"
              />
              <img src={twitter} alt="twitter" className="w-[2rem] h-[2rem]" />
              <img
                src={linkedin}
                alt="linkedin"
                className="w-[2rem] h-[2rem]"
              />
              <img
                src={instagram}
                alt="instagram"
                className="w-[2rem] h-[2rem]"
              />
            </div>

            <div className="flex gap-8">
              <a href="/">Terms</a>
              <a href="/">Privacy</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
