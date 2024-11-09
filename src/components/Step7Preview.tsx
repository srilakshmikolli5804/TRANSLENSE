import React from 'react';

interface Step7Props {
  businessName: string;
  country: string;
  state: string;
  city: string;
  address: string;
  email: string;
  mobile: string;
  profilePicture: File | null;
  panNumber: string;
  aadharNumber: string;
  bankAccount: string;
  ifscCode: string;
  serviceInfo: string;
}

const Step7Preview: React.FC<Step7Props> = ({
  businessName,
  country,
  state,
  city,
  address,
  email,
  mobile,
  profilePicture,
  panNumber,
  aadharNumber,
  bankAccount,
  ifscCode,
  serviceInfo
}) => (
  <div>
    <h3 className="text-xl font-bold">Business Information</h3>
    <p><strong>Business Name:</strong> {businessName}</p>
    <p><strong>Country:</strong> {country}</p>
    <p><strong>State:</strong> {state}</p>
    <p><strong>City:</strong> {city}</p>
    <p><strong>Address:</strong> {address}</p>

    <h3 className="text-xl font-bold">Owner and Manager Details</h3>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Mobile:</strong> {mobile}</p>
    {profilePicture && <img src={URL.createObjectURL(profilePicture)} alt="Profile" className="w-24 h-24 rounded-full" />}
    
    <h3 className="text-xl font-bold">PAN/AADHAR Details</h3>
    <p><strong>PAN Number:</strong> {panNumber}</p>
    <p><strong>Aadhar Number:</strong> {aadharNumber}</p>

    <h3 className="text-xl font-bold mb-4">Bank Details</h3>
    <p><strong>Bank Account Number:</strong> {bankAccount}</p>
    <p><strong>IFSC Code:</strong> {ifscCode}</p>

    <h3 className="text-xl font-bold mb-4">Service Information</h3>
    <p><strong>Service Info:</strong> {serviceInfo}</p>
  </div>
);

export default Step7Preview;
