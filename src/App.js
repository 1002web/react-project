import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import React from 'react';

const App = () => {
  const [firstname, setFirstname] = React.useState('Jules');
  const handleChange = (event) => {
    setFirstname(event.target.value);
  };
  return (
    <div>
      <h1>Bonjour {firstname}, et bienvenue à toi {firstname} !</h1>
      <input type="text" value={firstname} onChange={handleChange} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
