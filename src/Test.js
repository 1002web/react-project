import ReactDOM from 'react-dom';
import React from 'react';

const Test = () => {
  const [nametest, setNametest] = React.useState('');
  const handleChange = (event) => {
    setNametest(event.target.value);
  };
  return (
    <div>
      <h2>Et sinon {nametest}, c'est ton vrai nom ?</h2>
      <input type="text" value={nametest} onChange={handleChange} />
    </div>
  );
};
ReactDOM.render(<Test />, document.getElementById('root'));

export default Test;
