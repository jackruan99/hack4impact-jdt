import Header from './Header';
import Counter from './Counter';
import Button from './Button';

function App() {
  return (
    <div className='App'>
      <Header />
      <Counter count={0} />
      <Button color='green' text='Add 1' />
      <Button color='green' text='Minus 1' />
      <Button color='red' text='Reset' />
    </div>
  );
}

export default App;
