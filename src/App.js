
import './App.css';
import Row from './Components/Row'
import Navbar from './Components/Navbar';
import requests from './requests';
import Youtube  from 'react-youtube'
import { useState } from 'react';
import Movieplay from './Components/Movieplay';

function App() {
   const [play,setPlay]=useState();
  return (
    <div className="App">
    <div  className="Nav">
     <Navbar url={requests.fetchTrending} play={play}/>
     
     </div >
     
     <div className='contents'>
    
     <Row url={requests.fetchTrending} title={"Trending"} setPlay={setPlay}/>
     <Row url={requests.fetchNetflixOriginals} title={"NetflixOriginals"} setPlay={setPlay}/>
     <Row url={requests.fetchActionMovies} title={"ActionMovies"} setPlay={setPlay}/>
     <Row url={requests.fetchComedyMovies} title={"ComedyMovies"} setPlay={setPlay}/>
     <Row url={requests.fetchHorrorMovies} title={"HorrorMovies"} setPlay={setPlay}/>
     <Row url={requests.fetchRomanceMovies} title={"RomanceMovies"} setPlay={setPlay}/>
     <Row url={requests.fetchDocumentaries} title={"Documentaries"} setPlay={setPlay}/>
     <Row url={requests.fetchTopRated} title={"TopRated"} setPlay={setPlay}/>
     
    </div>

    </div>
  );
}

export default App;
