interface hStackProps {
  children: React.ReactNode;
  spacing: string;
  customStyle?: string;
}

export default function HStack({
  children,
  spacing,
  customStyle,
}: hStackProps) {
  return (
    <div className={`flex items-center ${spacing} ${customStyle}`}>
      {children}
    </div>
  );
}
