import "./style.css";

function AlertCard(props) {
  return (
    <div className="alert-card" style={props.style}>
      {props.children}
    </div>
  );
}

export default AlertCard;
