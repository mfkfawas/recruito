import { PropsWithChildren } from "react";

interface Props {
  isDark?: boolean;
}

export default function Tablet({ children, isDark }: PropsWithChildren<Props>) {
  return (
    <span
      className={`grid place-items-center px-12 py-4 rounded-full border 
     text-[1.4rem] font-medium w-fit ${
       isDark
         ? "text-[var(--color-green)] border-gray-700"
         : "text-[var(--color-text-blue)] border-gray-200"
     }`}
    >
      {children}
    </span>
  );
}
