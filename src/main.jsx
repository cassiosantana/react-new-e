import ReactDOM from 'react-dom/client';
import Multi, { BoaTarde, BoaNoite } from './components/Multiplos.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Multi.BomDia nome="Maria Rita"/>
    <BoaTarde nome="Maria Rita"/>
    <BoaNoite nome={'Maria "Rita"'}/>
  </div>
);
