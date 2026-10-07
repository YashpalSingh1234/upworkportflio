interface SectionProps {
  id?: string;
  children: React.ReactNode;
}

export function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20">
      {children}
    </section>
  );
}
