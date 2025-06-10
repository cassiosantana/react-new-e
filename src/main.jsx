import ReactDOM from 'react-dom/client';
import Saudacao from './components/Saudacao.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Saudacao tipo="Bom dia" nome="Cassio"/>
  </div>
);
