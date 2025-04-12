
import { useState } from "react";
import AuthLayout from "@/components/AuthLayout";
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";

const Index = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {isLoginView ? (
        <AuthLayout 
          title="Welcome back" 
          subtitle="Log in to your account to continue managing your logistics operations."
        >
          <LoginForm onSwitchToSignup={() => setIsLoginView(false)} />
        </AuthLayout>
      ) : (
        <AuthLayout 
          title="Create your account" 
          subtitle="Join thousands of logistics professionals using PackPal."
        >
          <SignupForm onSwitchToLogin={() => setIsLoginView(true)} />
        </AuthLayout>
      )}
    </div>
  );
};

export default Index;
