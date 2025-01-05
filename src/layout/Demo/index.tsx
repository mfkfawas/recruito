import { PropsWithChildren } from "react";
import Section from "../Section";

import grid from "../../assets/imgs/grid.png";

export default function Demo({ children }: PropsWithChildren) {
  return (
    <Section className="pb-8 lg:mb-[10rem] relative lg:h-[50rem]">
      <img
        src={grid}
        alt="grid"
        className="hidden lg:block absolute bottom-0 left-0"
      />
      <img
        src={grid}
        alt="grid-2"
        className="hidden lg:block absolute bottom-0 right-0"
      />
      <div className="h-full z-10">{children}</div>
    </Section>
  );
}
