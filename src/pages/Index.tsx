
import { useState } from "react";
import AuthLayout from "@/components/AuthLayout";
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";

const Index = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100">
      {isLoginView ? (
        <AuthLayout 
          title="Welcome to PackPal Trip Planner" 
          subtitle="Log in to your account to start planning your next journey."
        >
          <LoginForm onSwitchToSignup={() => setIsLoginView(false)} />
        </AuthLayout>
      ) : (
        <AuthLayout 
          title="Join PackPal Trip Planner" 
          subtitle="Create an account to organize your trips efficiently."
        >
          <SignupForm onSwitchToLogin={() => setIsLoginView(true)} />
        </AuthLayout>
      )}
    </div>
  );
};

export default Index;
