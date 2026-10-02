type Props = {
  index: string;
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ index, label, title, description }: Props) {
  return (
    <div className="max-w-2xl">
      <p className="font-code text-sm tracking-wide text-accent">
        {index} <span className="text-muted-foreground">/</span> {label}
      </p>
      <h2 className="mt-3 font-headline text-3xl font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-lg text-muted-foreground">{description}</p> : null}
    </div>
  );
}
