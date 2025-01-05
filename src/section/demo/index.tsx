import Container from "../../layout/Container";
import DemoLayout from "../../layout/Demo";
import Heading from "../features/Heading";
import Button from "../../ui/Button";
import search from "../../assets/imgs/search.png";
import StarWhiteFill from "../../assets/imgs/star-white-fill.png";

export default function Demo() {
  return (
    <DemoLayout>
      <div className="grid place-items-center h-full">
        <Container>
          <div className="flex flex-col items-center gap-8">
            <img src={search} alt="search" className="w-[12rem]" />
            <Heading className="text-[4.4rem] leading-[5.4rem] max-w-[48rem] text-center">
              Ready to enhance your hiring process ?
            </Heading>

            <Button bg="gradient">
              <span className="flex items-center gap-2">
                <img src={StarWhiteFill} alt="white-star" />
                <span>Request a Demo</span>
              </span>
            </Button>
          </div>
        </Container>
      </div>
    </DemoLayout>
  );
}
