import { useState } from "react";
import MobileInput from "@/components/MobileInput";
import OTPInput from "@/components/OTPInput";
import { useNavigate } from "react-router-dom";
import Layout from './Layout';

const Login = () => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate()

  return (
    <Layout>
      <div className="flex items-center justify-center h-screen bg-gray-100 py-20 px-6">
        {step === 1 ? (
          <MobileInput onNext={(mobile) => { setMobile(mobile); setStep(2); }} />
        ) : (
          <OTPInput onVerify={() => navigate('/checkout')}/>
        )}
      </div>
    </Layout>
  );
};

export default Login;