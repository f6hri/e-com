import { FiLoader } from "react-icons/fi";

interface IconButtonProps {
  icon: React.ReactNode;
  size?: string;
  onClick?: any;
  isLoading?: boolean;
  customStyle?: string;
}

export default function IconButton({
  icon,
  size = "md",
  onClick,
  isLoading = false,
  customStyle,
}: IconButtonProps) {
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
          {icon}
        </>
      )}
    </button>
  );
}

const styles = {
  default: `bg-blue-500 text-white font-semibold flex items-center gap-2 rounded-full `,
  sizes: {
    sm: `p-2 text-sm `,
    md: `p-3 `,
    lg: `p-4 text-lg `,
  },
  actions: {
    hover: `hover:bg-blue-600 `,
    active: `active:bg-blue-700 `,
    loading: `pointer-events-none bg-blue-500/50 `,
  },
};
