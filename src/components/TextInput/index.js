import "./style.css";

function TextInput(props) {
  return (
    <input
      className="text-input"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      type={props.password ? "password" : "text"}
    />
  );
}

export default TextInput;
