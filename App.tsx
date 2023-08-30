
import React, { useState } from 'react';
import { sendOTP, verifyOTP } from './AuthService'; // Adjust the path accordingly

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [isOTPRequested, setIsOTPRequested] = useState(false);

  const handleSendOTP = async () => {
    try {
      await sendOTP(email);
      setIsOTPRequested(true);
    } catch (error) {
      console.error('Failed to send OTP:', error);
    }
  };

  const handleLogin = async () => {
    try {
      await verifyOTP(email, otp);
      onLogin(); // This will set isLoggedIn to true in the App component
    } catch (error) {
      console.error('OTP verification failed:', error);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        {!isOTPRequested ? (
          <button type="button" onClick={handleSendOTP}>
            Send OTP
          </button>
        ) : (
          <div>
            <label>OTP:</label>
            <input type="text" value={otp} onChange={(e) => setOTP(e.target.value)} />
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;


