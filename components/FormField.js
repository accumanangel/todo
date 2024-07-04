import React from "react";

const FormField = ({
  placeholder,
  type,
  handleText,
  value,
  formStyle,
  errorMsg,
}) => {
  return (
    <div className={`flex-1 ${formStyle}`}>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full border rounded border-gray-300 p-2  form-input`}
        onChange={handleText}
        value={value}
      />
    </div>
  );
};

export default FormField;
