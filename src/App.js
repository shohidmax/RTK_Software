
import './App.css';

import Home from './Component/Pages/Home/Home'; 

function App() {
  const warning = () =>{
   return alert(`bangladesh jinabad`)
  }
  return (
    <div className="App">
       <Home> </Home>
    </div>
  );
}

export default App;
