function Button({ text, secondary, className, onClick, type }) {
  const variants = {
    primary:
      "border border-primary rounded-md p-1 cursor-pointer bg-secondary text-primary hover:bg-primary-hover transition-colors duration-300",
    secondary:
      "border border-primary rounded-md p-1 cursor-pointer bg-primary text-primary hover:bg-secondary transition-colors duration-300",
  };
  return (
    <button
      text={text ? text : "Button"}
      className={`${
        secondary ? variants.secondary : variants.primary
      } ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;

//NOTE:
// className is in the props because user and add additional styling and it will reflect in the button
// and since this is a button compoenent, not a button tag, we need to actually pass the actual button tag properties like onClick, type to the props as well
// Can use the spread operator with props to use any other html property with my button component
