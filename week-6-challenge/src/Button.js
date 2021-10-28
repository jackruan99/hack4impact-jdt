function Button(props) {
  return (
    <>
      <button style={{ backgroundColor: props.color }} onClick={props.onClick}>{props.text}</button>
    </>
  );
}

export default Button;
