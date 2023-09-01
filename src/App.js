
import './App.css';
import Row from './Components/Row'
import Navbar from './Components/Navbar';
import requests from './requests';
import Youtube  from 'react-youtube'
import { useState } from 'react';

function App() {
 

  return (
    <div className="App">
    <div  className="Nav">
     <Navbar/>

     </div >
     <div className='contents'>
    
     <Row url={requests.fetchTrending} title={"Trending"} />
     <Row url={requests.fetchNetflixOriginals} title={"NetflixOriginals"} />
     <Row url={requests.fetchActionMovies} title={"ActionMovies"} />
     <Row url={requests.fetchComedyMovies} title={"ComedyMovies"} />
     <Row url={requests.fetchHorrorMovies} title={"HorrorMovies"} />
     <Row url={requests.fetchRomanceMovies} title={"RomanceMovies"} />
     <Row url={requests.fetchDocumentaries} title={"Documentaries"} />
     <Row url={requests.fetchTopRated} title={"TopRated"} />
     
    </div>

    </div>
  );
}

export default App;
