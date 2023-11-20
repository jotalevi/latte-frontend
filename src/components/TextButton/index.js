import "./style.css";

function TextButton(props) {
  return (
    <div
      className={"text-button-" + props.type}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
      {props.text ? props.text : ""}
    </div>
  );
}

export default TextButton;
