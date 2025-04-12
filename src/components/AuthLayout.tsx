
import { ReactNode } from "react";
import Logo from "./Logo";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  image?: string;
}

const AuthLayout = ({ children, title, subtitle, image }: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left Side - Form Container */}
      <div className="w-full md:w-1/2 flex flex-col p-8 md:p-12 justify-center">
        <div className="mb-8">
          <Logo size="large" />
        </div>
        
        <h1 className="text-3xl font-bold mb-2 text-brand-blue">{title}</h1>
        <p className="text-gray-600 mb-8">{subtitle}</p>
        
        {children}
      </div>
      
      {/* Right Side - Image or Content */}
      <div 
        className="hidden md:flex w-1/2 bg-gradient-to-br from-brand-blue to-brand-lightBlue items-center justify-center p-12"
      >
        <div className="max-w-md text-white">
          <h2 className="text-3xl font-bold mb-4">Streamline Your Logistics</h2>
          <p className="text-white/80 text-lg mb-6">
            Organize shipments, track deliveries, and manage your logistics operations
            all in one place with PackPal.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-white mb-1">100+</div>
              <div className="text-white/80">Transport Partners</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-white mb-1">10k+</div>
              <div className="text-white/80">Deliveries Daily</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-white mb-1">50+</div>
              <div className="text-white/80">Countries Covered</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-white/80">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
