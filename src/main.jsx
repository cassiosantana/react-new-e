import ReactDOM from "react-dom/client";
import Primeiro from "./components/Primeiro";

const element = <h1>Projeto React</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h1>Projeto React</h1>);
// root.render(element);

root.render(<Primeiro/>);
