

import React, { useState } from 'react';

interface OTPInputProps {
  length: number;
  onChange: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length, onChange }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));

  const handleChange = (value: string, index: number) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(""));
    
    if (value && index < length - 1) {
      (document.getElementById(`otp-${index + 1}`) as HTMLInputElement)?.focus();
    }
  };

  return (
    <div className="flex space-x-2">
      {otp.map((_, index) => (
        <input
          key={index}
          id={`otp-${index}`}
          type="text"
          maxLength={1}
          className="w-10 h-10 text-center border rounded focus:ring-2 focus:ring-indigo-600"
          value={otp[index]}
          onChange={(e) => handleChange(e.target.value, index)}
        />
      ))}
    </div>
  );
};

export default OTPInput;
