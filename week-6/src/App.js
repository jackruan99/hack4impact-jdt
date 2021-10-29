import { useState } from 'react';

import Header from './Header'
import Button from './Button'

function App() {
  const [text, setText] = useState('Button 0 got clicked.');

  const fun1 = () => {
    setText('Button 1 got clicked.');
  }

  const fun2 = () => {
    setText('Button 2 got clicked.');
  }

  const fun3 = () => {
    setText('Button 3 got clicked.');
  }

  return (
    <div className="App">
      <Header />
      <h2>{text}</h2>
      <Button doSomething={fun1} color='red' text='Button 1' />
      <Button doSomething={fun2} color='orange' text='Button 2'/>
      <Button doSomething={fun3} color='green' text='Button 3'/>
    </div>
  );
}

export default App;
