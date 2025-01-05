import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export default function Section({
  children,
  className,
}: PropsWithChildren<Props>) {
  return (
    <section className={`w-full pt-8 sm:pt-[8rem] ${className}`}>
      {children}
    </section>
  );
}
