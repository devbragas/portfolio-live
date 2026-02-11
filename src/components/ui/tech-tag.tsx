type TechTagProps = {
  children: string;
};

export default function TechTag({ children }: TechTagProps) {
  return (
    <span className="inline-flex items-center rounded-lg px-2.5 py-1 bg-muted/60 text-xs font-medium text-foreground/70 border border-border/30">
      {children}
    </span>
  );
}
