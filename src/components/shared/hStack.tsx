interface hStackProps {
  children: React.ReactNode;
  spacing: string | number;
  customStyle?: string;
}

export default function HStack({
  children,
  spacing,
  customStyle,
}: hStackProps) {
  return (
    <div className={`flex items-center gap-${spacing} ${customStyle}`}>
      {children}
    </div>
  );
}
