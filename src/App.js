import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Individual from './Individuals/Individual';

function App() {
  return (
    <div className="App">
    <Individual/>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" />
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
