import {FaSearch} from 'react-icons/fa';

import '../Componentscss/Navbarcss.css'
import { useEffect, useState } from 'react';
import moviefetch from '../moviefetch';
import Movieplay from './Movieplay';
import '../App.css'
const Navbar=({url,play})=>{
    const [logo,setlogo]=useState("");
    useEffect( ()=>{
        async function fun(){
        const data=await moviefetch(url);
        const im=await (`https://image.tmdb.org/t/p/w200${data[0].poster_path}`);
        setlogo(im)
        }
        fun();
    },[])
    return(
        <>
            <h1 style={{color:"red"}}>MovieWeb</h1>
            <img style={{marginLeft:30,borderRadius:10}} src={logo} alt='image' width={1300} height={500}/>
            <div className='playing'>
            {play &&<Movieplay url={play}/>}
              </div>
           </>
    )
}
export default Navbar;