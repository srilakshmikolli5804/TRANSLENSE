const Step1BusinessInfo = ({
    businessName,
    country,
    state,
    city,
    openingTime,
    closingTime,
    handleInputChange,
    errors,
    handleNextStep, // For handling the Proceed button action
  }: any) => {
    return (
      <div>
        
        <h2 className="text-2xl font-bold mb-4">Business Information</h2>
  
        {/* Business Information Fields */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block mb-2 ">Business Name <span className="text-red-600">*</span></label>
            <input
              type="text"
              name="businessName"
              value={businessName}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
            {errors.businessName && <p className="text-red-600">{errors.businessName}</p>}
          </div>
          
        <div className="flex-1">
          <label className="block mb-2">Country <span className="text-red-600">*</span></label>
          <select
            name="country"
            value={country}
            onChange={handleInputChange}
            className="border p-2 w-full"
          >
            <option value="" disabled>Select Country</option>
            {['India', 'USA', 'UK', 'Canada'].map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.country && <p className="text-red-600">{errors.country}</p>}
        </div>
      </div>

        {/* State and City Fields */}
        <div className="flex space-x-4 mt-4">
          <div className="flex-1">
            <label className="block mb-2">State <span className="text-red-600">*</span></label>
            <select
              name="state"
              value={state}
              onChange={handleInputChange}
              className="border p-2 w-full"
            >
              <option value="" disabled>Select Country</option>
              {['Andhra Pradesh', 'Telangana', 'Uttar Pradesh', 'Kerala'].map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.state && <p className="text-red-600">{errors.state}</p>}
          </div>
          <div className="flex-1">
            <label className="block mb-2">City <span className="text-red-600">*</span></label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
            {errors.city && <p className="text-red-600">{errors.city}</p>}
          </div>
        </div>
  
        {/* Opening and Closing Time Fields */}
        <div className="flex space-x-4 mt-4">
          <div className="flex-1">
            <label className="block mb-2">Opening Time <span className="text-red-600">*</span></label>
            <input
              type="time"
              name="openingTime"
              value={openingTime}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
            {errors.openingTime && <p className="text-red-600">{errors.openingTime}</p>}
          </div>
          <div className="flex-1">
            <label className="block mb-2">Closing Time <span className="text-red-600">*</span></label>
            <input
              type="time"
              name="closingTime"
              value={closingTime}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
            {errors.closingTime && <p className="text-red-600">{errors.closingTime}</p>}
          </div>
        </div>
      </div>
    );
  };
  
  export default Step1BusinessInfo;
  