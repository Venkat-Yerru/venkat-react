// const heading = React.createElement("h1",{id: "heading"},"helloword from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement("div",
{id: "parent"},[React.createElement("div",{id:"child1"},
                [React.createElement("h1",{id: ""},"Hello world"), 
                React.createElement("h2",{},"hello 2")]),
                
                React.createElement("div",{id: "child2"},
                [React.createElement("h1",{id: ""},"Hello world"), 
                React.createElement("h2",{},"hello 2")]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);