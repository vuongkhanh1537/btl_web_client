function SelectInput({className,  label, options, name, value, handleChange, required }) {

  
  return (
    <div className={`mb-3 ${className}`}>
      <label className="form-label">{label}</label>
      <select
        value={value}
        onChange={handleChange}
        className="form-select"
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
        
        {/* <option  value='add'> <button type="button" className="btn">Add New {label}</button> </option> */}
        
      </select>
    </div>
  );
}

export default SelectInput;
