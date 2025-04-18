
import { React } from "react";
import Logo from "./Logo";

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-6 flex justify-center">
          <Logo size="large" className="mb-4" />
        </div>
        
        <h1 className="mb-2 text-2xl font-bold text-brand-blue">{title}</h1>
        <p className="mb-6 text-gray-600">{subtitle}</p>
        
        {children}
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2025 Pack-Pal Trip Planner. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
