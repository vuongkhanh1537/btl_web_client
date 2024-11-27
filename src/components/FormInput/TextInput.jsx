function TextInput({type, name, value='', label, placeholder, handleChange, required}) {
  return (
    
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        className="form-control"
        placeholder={placeholder}
        onChange={handleChange}
        required={required}

      />
    </div>
    
  );
}

export default TextInput;
