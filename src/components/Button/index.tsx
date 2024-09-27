import { twMerge } from "tailwind-merge";

export default function Button({
  children,
  className,
  ...otherProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={twMerge(
        `bg-white h-38px rounded-20px text-xs font-semibold text-ap-blue px-4 py-14px flex items-center`,
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
