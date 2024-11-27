function InputGroup({label, prependText, type, placeholder, name, value, handleChange, required}) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <div className="input-group">
        <span className="input-group-text">{prependText} </span>
        <input
          type={type}
          className="form-control"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={handleChange}
          
          required={required}
        ></input>
      </div>
    </div>
  );
}

export default InputGroup;
