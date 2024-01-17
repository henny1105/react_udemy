import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';

const entryPoint = document.getElementById('root');
ReactDOM.createRoot(entryPoint).render(<App />);
// ReactDOM.createRoot(entryPoint).render(React.createElement(App));
// JSX 문법이 도입이 되기 전에 사용함 JavaScropt 문법임
