interface vStackProps {
    children: React.ReactNode;
    spacing: string | number;
    customStyle?: string;
  }
  
  export default function VStack({
    children,
    spacing,
    customStyle,
  }: vStackProps) {
    return (
      <div className={`flex flex-col gap-${spacing} ${customStyle}`}>
        {children}
      </div>
    );
  }
  