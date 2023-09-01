import { useEffect, useState } from "react";
import moviefetch from "../moviefetch";
import '../Componentscss/Rowcss.css'

const Row=({url,title})=>{
    const [Movie,setMovie]=useState([]);
    useEffect(()=>{
        async function fun(){
            const req=await moviefetch(url);
            setMovie(req);
        }
        fun();
    },[url])
    useEffect(()=>{
        console.log(Movie);
    },[Movie])
    return(
            <div className="row">
                <h1>{title}</h1>
                <div className="flex_movie">
                {
                    Movie.map((values,key)=>{
                        return(
                            <>
                           <h1 className="items">
                            <img className="poster" src={`https://image.tmdb.org/t/p/w200${values.poster_path}`}/>
                            <br/>
                            <span className="poster_title">{values.name?values.name:values.title}</span>
                            </h1>   
                            </>
                        )
                    })
                }
                </div>
            </div>  
    )
}
export default Row;