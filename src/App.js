import logo from './logo.svg';
import './App.css';
import CardRCC from './Component/CardRCC';
import CardRFC from './Component/CardRFC';
import BTLayout from './Component/BTLayout/BTLayout';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';

function App() {
  return (
    <div className="App">
      {/* <BTLayout /> */}
      {/* <DataBinding /> */}
      <HandleEvent />
    </div>
  );
}

export default App;
