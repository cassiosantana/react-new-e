import ReactDOM from "react-dom/client";
import Multi, { BoaNoite } from "./components/Multiplos";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Multi.BoaTarde nome="Cássio"/>
        <BoaNoite nome="Cássio"/>
    </div>
);
