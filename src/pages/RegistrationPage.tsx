import React, { useState } from 'react';
import Header from '../components/Header';
import Step1BusinessInfo from '../components/Step1BusinessInfo';
import Step2OwnerDetails from '../components/Step2OwnerDetails';
import Step3PanAadhar from '../components/Step3PanAadhar';
import Step4LegalDocs from '../components/Step4LegalDocs';
import Step5BankDetails from '../components/Step5BankDetails';
import Step6ServiceInfo from '../components/Step6ServiceInfo';
import Step7Preview from '../components/Step7Preview';

const RegistrationPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState<Record<string, string | File | null>>({
    businessName: '',
    country: '',
    state: '',
    city: '',
    email: '',
    mobile: '',
    profilePicture: null,
    panNumber: '',
    aadharNumber: '',
    bankAccount: '',
    ifscCode: '',
    serviceInfo: '',
    openingTime: '',
    closingTime: '',
    
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (file: File) => {
    setFormData({ ...formData, profilePicture: file });
  };

  const handleNextButtonClick = () => {
    if (validateStep()) {
      if (currentStep < 7) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleCompleteRegistration = () => {
    setIsSubmitted(true); // thank you message
  };

  const validateStep = (): boolean => {
    const stepErrors: { [key: string]: string } = {};
    
    // required fields for each step
    const requiredFields: { [key: number]: string[] } = {
      1: ['businessName', 'country', 'state', 'city', 'openingTime', 'closingTime'],
      2: ['email', 'mobile', 'profilePicture'],
      3: ['panNumber', 'aadharNumber'],
      5: ['bankAccount', 'ifscCode'],
      6: ['serviceInfo'], 
    };
    
    // Check if required fields are filled for the current step
    requiredFields[currentStep]?.forEach((field) => {
      const value = formData[field];
    
      // Only apply trim if the value is a string
      if (typeof value === 'string' && !value.trim()) {
        stepErrors[field] = `${field} is required`;
      }
    
      // file types like profilePicture, check if it's null
      if (field === 'profilePicture' && value === null) {
        stepErrors[field] = 'Profile picture is required';
      }
    });
  
    // Additional validations for email and mobile
    if (currentStep === 2) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const mobileRegex = /^[0-9]{10}$/;
  
      if (formData.email && !emailRegex.test(formData.email as string)) {
        stepErrors.email = 'Please enter a valid email address';
      }
  
      if (formData.mobile && !mobileRegex.test(formData.mobile as string)) {
        stepErrors.mobile = 'Mobile number should be 10 digits long and contain only numbers';
      }
    }
  
    setErrors(stepErrors); 
    return Object.keys(stepErrors).length === 0; 
  };
  

  return (
    <div className="container mx-auto p-6">
      <Header />
      {isSubmitted ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600">Thank you for submitting!</h2>
          <p className="mt-4 text-gray-700">We have received your registration information.</p>
        </div>
      ) : (
        <div className="flex gap-6">
          {/* Left Column for Steps with Color Effects */}
          <div className="w-1/4 p-4 rounded-lg" style={{ backgroundColor: '#d7e8fc' }}>
            <h2 className="text-2xl font-bold mb-4 p-2">Partner with us</h2>
            <p className="text-sm text-gray-500 p-2">Be our partner in just a few steps and start increasing your reach by gaining new customers.</p>
            <ul className="space-y-4">
              {['Business Info', 'Owner Details', 'PAN & AADHAR', 'Legal Docs', 'Bank Details', 'Service Info', 'Preview'].map((step, index) => (
                <li
                  key={index}
                  className={`cursor-pointer flex items-center space-x-2 
                    ${currentStep === index + 1 ? 'text-blue-600 font-bold' : ''} 
                    ${currentStep > index + 1 ? 'text-green-600' : ''} 
                    ${currentStep < index + 1 ? 'text-gray-400' : ''}`}
                  onClick={() => setCurrentStep(index + 1)}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full border
                      ${currentStep > index + 1 ? 'bg-green-600 text-white' : ''}
                      ${currentStep === index + 1 ? 'bg-blue-600 text-white' : ''}
                      ${currentStep < index + 1 ? 'bg-gray-300' : ''}`}
                  >
                    {index + 1}
                  </div>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column for Form Data */}
          <div className="w-3/4 m-8 flex flex-col">
            {currentStep === 1 && <Step1BusinessInfo {...formData} handleInputChange={handleInputChange} errors={errors} />}
            {currentStep === 2 && <Step2OwnerDetails email={''} mobile={''} profilePicture={null} {...formData} handleInputChange={handleInputChange} errors={errors} onImageUpload={handleImageUpload} />}
            {currentStep === 3 && <Step3PanAadhar panNumber={''} aadharNumber={''} {...formData} handleInputChange={handleInputChange} errors={errors} />}
            {currentStep === 4 && <Step4LegalDocs onUpload={() => {}} />}
            {currentStep === 5 && <Step5BankDetails bankAccount={''} ifscCode={''} {...formData} handleInputChange={handleInputChange} errors={errors} />}
            {currentStep === 6 && <Step6ServiceInfo serviceInfo={''} {...formData} handleInputChange={handleInputChange} errors={errors} />}
            {currentStep === 7 && <Step7Preview businessName={''} country={''} state={''} city={''} email={''} mobile={''} profilePicture={null} panNumber={''} aadharNumber={''} bankAccount={''} ifscCode={''} serviceInfo={''} address={''} {...formData} />}

            <div className="flex justify-end gap-4 mt-auto">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="py-2 px-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                >
                  Previous
                </button>
              )}

              <button
                type="button"
                onClick={currentStep === 7 ? handleCompleteRegistration : handleNextButtonClick}
                className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                {currentStep < 7 ? 'Proceed to Next' : 'Complete Registration'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationPage;
