import { PropsWithChildren } from "react";

export default function Section({ children }: PropsWithChildren) {
  return <section className="w-full py-8 sm:py-[8rem]">{children}</section>;
}
