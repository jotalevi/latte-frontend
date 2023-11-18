import "./style.css";

function TextButton(props) {
  return (
    <div
      className={"text-button-" + props.type}
      onClick={props.onClick}
      style={props.style}
    >
      {props.text}
    </div>
  );
}

export default TextButton;
