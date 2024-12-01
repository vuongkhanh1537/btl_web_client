function SelectInput({className,  label, options, name, value, handleChange, required }) {

  
  return (
    // <div className={`mb-3 ${className}`}>
    //   <label className="form-label">{label}</label>
    //   <select
    //     value={value}
    //     onChange={handleChange}
    //     className="form-select"
    //     name={name}
    //     required={required}
    //   >
    //     <option value="" disabled>
    //       Select {label}
    //     </option>
    //     {options.map((option) => (
    //       <option key={option.value} value={option.value}>
    //         {option.label}
    //       </option>
          
    //     ))}
        
    //     {/* <option  value='add'> <button type="button" className="btn">Add New {label}</button> </option> */}
        
    //   </select>
    // </div>
    <div className={`mb-4 ${className}`}>
  <label className="block text-md font-medium text-gray-700 mb-2">{label}</label>
  <select
    value={value}
    onChange={handleChange}
    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    name={name}
    required={required}
  >
    <option value="" disabled>
      Select {label}
    </option>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
</div>

  );
}

export default SelectInput;
