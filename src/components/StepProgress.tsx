import React from 'react';

interface StepProgressProps {
  currentStep: number;
}

const StepProgress: React.FC<StepProgressProps> = ({ currentStep }) => (
  <div className="flex w-full m-4">
    <div className="w-1/4 p-4 rounded-lg" style={{ backgroundColor: '#d7e8fc' }}>
      <h2 className="text-2xl font-bold mb-4 p-2">Partner with us</h2>
      <p className="text-sm text-gray-500 p-2">
        Be our partner in just a few steps and start increasing your reach by gaining new customers.
      </p>
      <ul className="space-y-4">
        {[
          'Business Information',
          'Owner and Manager Details',
          'PAN/AADHAR Details',
          'Legal Documents',
          'Bank Details',
          'Service Info',
          'Preview Document',
          'Reach Increased',
        ].map((stepName, index) => (
          <li
            key={index}
            className={`flex items-center space-x-2 ${currentStep >= index + 1 ? 'text-indigo-600' : 'text-gray-400'}`}
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full border">
              {index + 1}
            </div>
            <span>{stepName}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default StepProgress;
