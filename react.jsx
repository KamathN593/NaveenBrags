function ReactComponent(props) {
    return <h1>{props.content}</h1>;
}

// different syntax for a function
// function declaration syntax
function myComponent(props) {
    return <div>{props.content}</div>;
}

// Arrow function syntax - benefit is it's succinctness
const myComponent = (props) => {
    return <div>{props.content}</div>;
}

// Arrow function syntax (shorthand)
const myComponenet = (props) => <div>{props.content}</div>;



//someReact Program
//adding comments

/* Go to react.new and paste this code in to see it work! */
import React from "react";

function App() {
  const [isRedColor, setRedColor] = React.useState(false);

  const toggleColor = () => setRedColor((prev) => !prev);

  return (
    <button
      onClick={toggleColor}
      style={{
        background: isRedColor ? "red" : "black",
        color: "white",
      }}
    >
      Button is {isRedColor ? "red" : "not red"}
    </button>
  );
}

export default App;
