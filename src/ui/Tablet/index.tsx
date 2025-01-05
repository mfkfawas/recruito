import { PropsWithChildren } from "react";

export default function Tablet({ children }: PropsWithChildren) {
  return (
    <span className="grid place-items-center px-12 py-4 rounded-full border border-gray-200 text-[var(--color-text-blue)] text-[1.4rem] font-medium w-fit">
      {children}
    </span>
  );
}
