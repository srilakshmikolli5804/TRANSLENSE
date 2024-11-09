const Step2OwnerDetails = ({
    email,
    mobile,
    profilePicture,
    handleInputChange,
    onImageUpload,
    errors,
  }: any) => {
    return (
      <div>
        {/* Step Title */}
        <h2 className="text-2xl font-bold mb-4">Owner Details</h2>
  
        {/* Email and Mobile Fields */}
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block mb-2">Email <span className="text-red-600">*</span></label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
            {errors.email && <p className="text-red-600">{errors.email}</p>}
          </div>
          <div className="flex-1">
            <label className="block mb-2">Mobile <span className="text-red-600">*</span></label>
            <input
              type="text"
              name="mobile"
              value={mobile}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
            {errors.mobile && <p className="text-red-600">{errors.mobile}</p>}
          </div>
        </div>
  
        {/* Profile Picture Upload Field */}
        <div className="mt-4">
          <label className="block mb-2">Profile Picture <span className="text-red-600">*</span></label>
          <input
            type="file"
            name="profilePicture"
            onChange={(e) => onImageUpload(e.target.files?.[0])}
            className="border p-2 w-full"
          />
          {profilePicture && <p className="text-green-600 mt-2">File uploaded: {profilePicture.name}</p>}
          {errors.profilePicture && <p className="text-red-600">{errors.profilePicture}</p>}
        </div>
      </div>
    );
  };
  
  export default Step2OwnerDetails;
  
