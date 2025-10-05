function Input({ type, placeholder, label, name }) {
  return (
    <div className="w-full">
      {label ? <label htmlFor={name}>{label}</label> : null}
      {/* This can be written as -  */}
      {/* {label && <label>{label}</label>} */}
      <div className="flex gap-1 border-2 border-neutral-500 rounded-lg overflow-hidden">
        <div className="bg-primary text-primary rounded-l-md p-2">icon</div>
        <input
          type={type ? type : "text"}
          placeholder={placeholder}
          id={name}
          className="focus:outline-none px-2"
        />
      </div>
    </div>
  );
}

export default Input;

//NOTE:
// label's for and input's id should be same to map label and input
// overflow-hidden used to stop inner elements cutting off the border, like when autocomplete fields
