const Step5BankDetails = ({
    bankAccount,
    ifscCode,
    handleInputChange,
    errors,
  }: any) => {
    return (
      <div>
        {/* Step Title */}
        <h2 className="text-2xl font-bold mb-4">Bank Details</h2>
  
        {/* Bank Account and IFSC Code Fields */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block mb-2">Bank Account <span className="text-red-600">*</span></label>
            <input
              type="text"
              name="bankAccount"
              value={bankAccount}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
            {errors.bankAccount && <p className="text-red-600">{errors.bankAccount}</p>}
          </div>
          <div className="flex-1">
            <label className="block mb-2">IFSC Code <span className="text-red-600">*</span></label>
            <input
              type="text"
              name="ifscCode"
              value={ifscCode}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
            {errors.ifscCode && <p className="text-red-600">{errors.ifscCode}</p>}
          </div>
        </div>
      </div>
    );
  };
  
  export default Step5BankDetails;
  
