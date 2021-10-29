function Button(props) {
    return (
      <>
        <button onClick={props.doSomething} style={{ backgroundColor: props.color }} >{props.text}</button>
      </>
    );
  }
  
  export default Button;