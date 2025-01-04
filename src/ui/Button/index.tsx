import { PropsWithChildren } from "react";

interface Props {
  bg?: "gradient";
}

export default function Button({ children, bg }: PropsWithChildren<Props>) {
  return (
    <button
      className={`grid place-items-center px-12 py-4 rounded-full font-semibold text-xl ${
        !bg ? "border border-gray-300" : ""
      }`}
      style={{
        background: bg ? "var(--brand-gradient) " : "transparent",
        color: bg ? "white" : "var(--color-text-dark)",
      }}
      onClick={() => {}}
    >
      {children}
    </button>
  );
}
