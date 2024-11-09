const Step6ServiceInfo = ({
    serviceInfo,
    handleInputChange,
    errors,
  }: any) => {
    return (
      <div>
        {/* Step Title */}
        <h2 className="text-2xl font-bold mb-4">Service Information</h2>
  
        {/* Service Information Field */}
        <div className="mt-4">
          <label className="block mb-2">Service Info <span className="text-red-600">*</span></label>
          <textarea
            name="serviceInfo"
            value={serviceInfo}
            onChange={handleInputChange}
            className="border p-2 w-full"
            rows={4}
          />
          {errors.serviceInfo && <p className="text-red-600">{errors.serviceInfo}</p>}
        </div>
      </div>
    );
  };
  
  export default Step6ServiceInfo;
  
