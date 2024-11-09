const Step4LegalDocs = ({
    legalDocument,
    handleDocumentUpload,
    errors,
  }: any) => {
    return (
      <div>
        {/* Step Title */}
        <h2 className="text-2xl font-bold mb-4">Step 4: Legal Documents</h2>
  
        {/* Legal Document Upload Field */}
        <div className="mt-4">
          <label className="block mb-2">Upload Legal Document <span className="text-red-600">*</span></label>
          <input
            type="file"
            name="legalDocument"
            onChange={handleDocumentUpload}
            className="border p-2 w-full"
          />
          {/* Display uploaded file name */}
          {legalDocument?.name && (
            <p className="text-green-600 mt-2">File uploaded: {legalDocument.name}</p>
          )}
          {/* Display error message if exists */}
          {errors?.legalDocument && (
            <p className="text-red-600 mt-2">{errors.legalDocument}</p>
          )}
        </div>
      </div>
    );
  };
  
  export default Step4LegalDocs;
  
