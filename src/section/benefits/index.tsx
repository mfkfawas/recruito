import Container from "../../layout/Container";
import BenefitsLayout from "../../layout/Benefits";
import Tablet from "../../ui/Tablet";
import Heading from "../features/Heading";
import { data } from "./data";
import BenefitCard from "./BenefitCard";

export default function Benefits() {
  return (
    <BenefitsLayout>
      <Container>
        <div className="flex flex-col items-center gap-8 lg:gap-16 text-center">
          <Tablet isDark>Benefits</Tablet>
          <Heading className="max-w-[74rem] text-[4.4rem] leading-[5.4rem] text-white">
            Unlock the advantages of using Recruito AI for your hiring needs.
          </Heading>

          {/* cards */}
          <div className="flex flex-wrap gap-4 justify-center">
            {data.map(({ title, description, src }) => (
              <BenefitCard
                key={title}
                title={title}
                description={description}
                src={src}
              />
            ))}
          </div>
        </div>
      </Container>
    </BenefitsLayout>
  );
}
