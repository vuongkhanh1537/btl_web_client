function TextInput({type, name, value='', label, placeholder, handleChange, required}) {
  return (
    
    // <div className="mb-3">
    //   <label className="form-label">{label}</label>
    //   <input
    //     type={type}
    //     name={name}
    //     value={value}
    //     className="form-control"
    //     placeholder={placeholder}
    //     onChange={handleChange}
    //     required={required}

    //   />
    // </div>
    
    <div className="mb-4">
  <label className="block text-base font-semibold text-gray-700">{label}</label>
  <input
    type={type}
    name={name}
    value={value}
    className="mt-1 w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    placeholder={placeholder}
    onChange={handleChange}
    required={required}
  />
</div>

  );
}

export default TextInput;
