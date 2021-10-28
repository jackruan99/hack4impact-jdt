import Header from './Header'
import Button from './Button'

function App() {
  return (
    <div className="App">
      <Header />
      <Button color='red' text='Button 1' />
      <Button color='orange' text='Button 2'/>
      <Button color='green' text='Button 3'/>
    </div>
  );
}

export default App;
