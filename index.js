const heading = "Hello world!";
const root = document.getElementById("root");
root.append(heading);

const reactHeading = React.createElement("h1", {}, "Hello world from react!");
const appRoot = ReactDOM.createRoot(root);
appRoot.render(reactHeading);