
import { ReactNode } from "react";
import Logo from "./Logo";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-6 flex justify-center">
          <Logo size="large" />
        </div>
        
        <h1 className="mb-2 text-2xl font-bold text-brand-blue">{title}</h1>
        <p className="mb-6 text-gray-600">{subtitle}</p>
        
        {children}
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2025 PackPal Trip Planner. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
