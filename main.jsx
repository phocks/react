// Our main React file here or something

function HelloWorld(props) {
  return (
    <h1>Hello, {props.name}</h1>
    );
  }

// Define a react element or something
const element = <HelloWorld name="Joshua" />;

ReactDOM.render(
  element,
  document.getElementById('react-render')
);