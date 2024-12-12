function InputGroup({label, prependText, type, placeholder, name, value, handleChange, required}) {
  return (
    // <div className="mb-3">
    //   <label className="form-label">{label}</label>
    //   <div className="input-group">
    //     <span className="input-group-text">{prependText} </span>
    //     <input
    //       type={type}
    //       className="form-control"
    //       placeholder={placeholder}
    //       name={name}
    //       value={value}
    //       onChange={handleChange}
          
    //       required={required}
    //     ></input>
    //   </div>
    // </div>
//     <div className="mb-4">
//   <label className="block text-sm font-medium text-gray-700">{label}</label>
//   <div className="relative mt-1">
//     {prependText && (
//       <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//         {prependText}
//       </span>
//     )}
//     <input
//       type={type}
//       className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//       placeholder={placeholder}
//       name={name}
//       value={value}
//       onChange={handleChange}
//       required={required}
//     />
//   </div>
// </div>

 <div className="mb-4">
  <label className="block text-base font-medium text-gray-700">{label}</label>
  <div className="flex items-center mt-1">
    <span className="px-4 py-2 font-medium text-md text-gray-600 bg-gray-200 rounded-l-md">
      {prependText}
    </span>
    <input
      type={type}
      className="w-full text-md p-2 pl-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
      required={required}
    />
  </div>
</div> 

//  <div className="mb-4">
//   <label className="block text-sm font-medium">{label}</label>
//   <div className="flex items-center border border-gray-300 rounded-md">
//     {/* <span className="px-4 py-2 text-sm bg-gray-200 rounded-l-md">{prependText}</span> */}
//     <span className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-l-md h-full">{prependText}</span>
//     <input
//       type={type}
//       className="form-input w-full p-2 border-0 rounded-r-md focus:ring-2 focus:ring-blue-500"
//       placeholder={placeholder}
//       name={name}
//       value={value}
//       onChange={handleChange}
//       required={required}
//     />
//   </div>
// </div> 

    );
}

export default InputGroup;
