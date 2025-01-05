import Heading from "./Heading";

interface Props {
  title: string;
  description: string;
}

export default function DetailCard({ title, description }: Props) {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start gap-2 lg:gap-4">
      <Heading className="text-[3rem] lg:text-[4.4rem] leading-[4rem] lg:leading-[5.5rem]">
        {title}
      </Heading>
      <p className="w-[90%] lg:w-auto">{description}</p>
    </div>
  );
}
