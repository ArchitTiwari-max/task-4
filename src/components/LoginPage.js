import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [otpCode, setOtpCode] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const sendOTP = async () => {
    try {
      const response = await fetch('https://email-sending-and-verification.onrender.com/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to send OTP');
      }

      const responseData = await response.json();
      console.log('OTP sent successfully:', responseData);
      // Handle success or proceed to OTP verification
    } catch (error) {
      console.error('Error sending OTP:', error);
      // Handle errors or display an error message
    }
  };

  const verifyOTP = async () => {
    try {
      const response = await fetch('https://email-sending-and-verification.onrender.com/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otpCode }),
      });

      if (!response.ok) {
        throw new Error('Failed to verify OTP');
      }

      const responseData = await response.json();
      console.log('OTP verified successfully:', responseData);
      // Handle success or proceed with login/authentication
    } catch (error) {
      console.error('Error verifying OTP:', error);
      // Handle errors or display an error message
    }
  };

  const handleSendOTP = async () => {
    // Call the sendOTP function when the button is clicked
    await sendOTP();
  };

  const handleVerifyOTP = async () => {
    // Call the verifyOTP function when verifying OTP
    await verifyOTP();
  };

  return (
    <div className="login-container">
      <h1 className='logintext'>LogIn</h1>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={handleEmailChange}
        className="input-field"
      />
      <button onClick={handleSendOTP} className="send-otp-btn">
        Send OTP
      </button>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otpCode}
        onChange={(e) => setOtpCode(e.target.value)}
        className="input-field"
      />
      <button onClick={handleVerifyOTP} className="verify-otp-btn">
        Verify OTP
      </button>
    </div>
  );
};
export default LoginPage;