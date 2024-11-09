const Step3PanAadhar = ({
    panNumber,
    aadharNumber,
    handleInputChange,
    errors,
  }: any) => {
    return (
      <div>
        {/* Step Title */}
        <h2 className="text-2xl font-bold mb-4">Step 3: PAN & AADHAR</h2>
  
        {/* PAN Number and Aadhar Number Fields */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block mb-2">PAN Number <span className="text-red-600">*</span></label>
            <input
              type="text"
              name="panNumber"
              value={panNumber}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
            {/* Error handling for PAN Number */}
            {errors.panNumber && <p className="text-red-600">{errors.panNumber}</p>}
          </div>
          <div className="flex-1">
            <label className="block mb-2">Aadhar Number <span className="text-red-600">*</span></label>
            <input
              type="text"
              name="aadharNumber"
              value={aadharNumber}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
            {/* Error handling for Aadhar Number */}
            {errors.aadharNumber && <p className="text-red-600">{errors.aadharNumber}</p>}
          </div>
        </div>
      </div>
    );
  };
  
  export default Step3PanAadhar;
  
