

import React, { useState } from 'react';

interface ImageUploadProps {
  onUpload: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onUpload(file);
    }
  };

  return (
    <div className="flex flex-col items-center border rounded-lg p-4 bg-gray-50">
      <input type="file" onChange={handleFileChange} className="mb-2" />
      {preview && <img src={preview} alt="Preview" className="w-24 h-24 object-cover rounded-md mt-2" />}
    </div>
  );
};

export default ImageUpload;
