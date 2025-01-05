import { PropsWithChildren } from "react";

export default function Section({ children }: PropsWithChildren) {
  return <section className="w-full pt-8 sm:pt-[8rem]">{children}</section>;
}
