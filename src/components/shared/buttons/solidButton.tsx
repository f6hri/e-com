import { FiLoader } from "react-icons/fi";

interface SolidButtonProps {
  title: string;
  size?: string;
  onClick?: any;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  customStyle?: string;
}

export default function SolidButton({
  title,
  size = "md",
  onClick,
  leftIcon,
  rightIcon,
  isLoading = false,
  customStyle,
}: SolidButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
      ${styles.default}
      ${size === "sm" && styles.sizes.sm}
      ${size === "md" && styles.sizes.md}
      ${size === "lg" && styles.sizes.lg}
      ${styles.actions.hover}
      ${styles.actions.active}
      ${isLoading === true && styles.actions.loading}
      ${customStyle}
       `}
    >
      {isLoading === true ? (
        <span className="animate-spin">
          <FiLoader />
        </span>
      ) : (
        <>
          {leftIcon}
          {title}
          {rightIcon}
        </>
      )}
    </button>
  );
}

const styles = {
  default: `bg-blue-500 text-white font-semibold flex items-center gap-2 rounded-md `,
  sizes: {
    sm: `px-6 py-2 text-sm `,
    md: `px-9 py-3 `,
    lg: `px-12 py-4 text-lg `,
  },
  actions: {
    hover: `hover:bg-blue-600 `,
    active: `active:bg-blue-700 `,
    loading: `pointer-events-none bg-blue-500/50 `,
  },
};
