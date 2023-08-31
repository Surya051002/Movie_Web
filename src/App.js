
import './App.css';
import Row from './Components/Row'
import Navbar from './Components/Navbar';
import requests from './requests';

function App() {
  return (
    <div className="App">
     <Navbar/>
     
      <Row apilink={requests.fetchTrending}/>
      
    </div>
  );
}

export default App;
