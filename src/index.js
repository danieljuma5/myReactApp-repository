import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Interactivity() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
      alert("You clicked this button")
       setCount(count + 1)
}
  return (
    <div className="app">
      <button onClick={incrementCount}>Click Here</button>
      You clicked this button {count} times
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default Interactivity;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
