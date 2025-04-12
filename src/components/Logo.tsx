
import { Package } from "lucide-react";

interface LogoProps {
  size?: "small" | "medium" | "large";
  color?: string;
}

const Logo = ({ size = "medium", color = "text-brand-blue" }: LogoProps) => {
  const sizeClasses = {
    small: "text-xl",
    medium: "text-2xl",
    large: "text-3xl",
  };

  return (
    <div className="flex items-center gap-2">
      <Package className={`${color}`} />
      <span className={`font-bold ${sizeClasses[size]} ${color}`}>PackPal</span>
    </div>
  );
};

export default Logo;
