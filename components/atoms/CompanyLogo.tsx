import { cn } from "@/lib/utils";

interface CompanyLogoProps {
  name: string;
  src?: string;
  size?: "sm" | "md";
  className?: string;
}

const sizeMap = {
  sm: "w-6 h-6 text-sm rounded-md",
  md: "w-9 h-9 text-base rounded-xl",
};

const CompanyLogo = ({
  name,
  src,
  size = "md",
  className,
}: CompanyLogoProps) => {
  const initial = name.charAt(0).toUpperCase();

  if (src) {
    return (
      <div
        className={cn(
          "overflow-hidden shrink-0 bg-transparent",
          sizeMap[size],
          className
        )}
      >
        <img src={src} alt={name} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center shrink-0 bg-amber-700 font-bold text-white leading-none",
        sizeMap[size],
        className
      )}
    >
      {initial}
    </div>
  );
};

export default CompanyLogo;
