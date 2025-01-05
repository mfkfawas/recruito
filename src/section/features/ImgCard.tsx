interface Props {
  src: string;
}

export default function ImgCard({ src }: Props) {
  return (
    <img
      src={src}
      alt={`${src}-img`}
      loading="lazy"
      className="hidden lg:block"
    />
  );
}
