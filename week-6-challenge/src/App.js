import { useState } from 'react';

import Header from './Header';
import Counter from './Counter';
import Button from './Button';

function App() {
  // const [count, setCount] = useState(0);  // NOT THE BEST WAY
  const [count, setCount] = useState(() => 0);

  const incrementCount = () => {
    // setCount(count + 1);  // NOT THE BEST WAY 
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  }

  const decrementCount = () => {
    // setCount(count - 1);  // NOT THE BEST WAY 
    setCount(prevCount => prevCount - 1);
  }

  const resetCount = () => {
    setCount(0);
  }

  return (
    <div className='App'>
      <Header />
      <Counter count={count} />
      <Button onClick={decrementCount} color='green' text='-1' />
      <Button onClick={incrementCount} color='green' text='+1' />
      <Button onClick={resetCount} color='red' text='Reset' />
    </div>
  );
}

export default App;
