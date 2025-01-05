import Heading from "../features/Heading";

interface Props {
  src: string;
  title: string;
  description: string;
}

export default function BenefitCard({ src, title, description }: Props) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-8 bg-[var(--color-dark-card-bg)] border border-gray-700 rounded-xl">
      <img
        src={src}
        alt="edit"
        className="p-4 rounded-lg border border-gray-700"
      />
      <Heading className="font-medium text-white leading-[2.5rem] text-[2.1rem]">
        {title}
      </Heading>
      <p className="text-center text-[var(--color-text-dark-bg)] max-w-[33rem]">
        {description}
      </p>
    </div>
  );
}
