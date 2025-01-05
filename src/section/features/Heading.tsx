import { PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export default function Heading({
  children,
  className,
}: PropsWithChildren<Props>) {
  return (
    <h2 className={`font-medium lg:font-semibold ${className}`}>{children}</h2>
  );
}
