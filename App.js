import React from "react";
import ReactDOM from "react-dom";


// React Element:-
const heading = (<h1> Hello form React Element 🚀🚀</h1>);

// React Component
const HeadingComponent = () => (
    <h1>Hello form React Component 🚀🚀 </h1>
);

// Component composition:-a component inside another component
const Title = () => {
    return <h1> Title Components 🚀🚀</h1>
}

const HeadingComponent1 = () => (
    <div className="heading">
        <Title />  
        <h1>Hello form React Component 🚀🚀 </h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);   // this is how we render react element.
root.render(<HeadingComponent1/>);  // this is how we render react component.