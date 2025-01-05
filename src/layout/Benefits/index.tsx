import { PropsWithChildren } from "react";
import Section from "../Section";
import benefitsShade from "../../assets/imgs/benefits-shading.png";

export default function Benefits({ children }: PropsWithChildren) {
  return (
    <Section className="bg-[var(--color-dark-gray)] pb-8 relative lg:h-[64rem]">
      <div className="absolute bottom-0 left-0 hidden lg:block">
        <img src={benefitsShade} alt="benefits-shade" className="h-[59rem]" />
      </div>
      <div className="absolute top-0 right-0 hidden lg:block">
        <img
          src={benefitsShade}
          alt="benefits-shade-2"
          className="h-[59rem] -scale-x-100"
        />
      </div>
      <div className="relative z-10">{children}</div>
    </Section>
  );
}
