import { useEffect, useState } from "react";
import moviefetch from "../moviefetch";
import '../Componentscss/Rowcss.css'
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const Row=({url,title})=>{
    var moviecount=0;
    const [Movie,setMovie]=useState([]);
    const [movieurl,setmovieurl]=useState("");

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

    function handleurl(currentmovie){
            if(movieurl){
                setmovieurl("");
            }
            else{
                    movieTrailer(currentmovie?.title||"").then(movieurl=>{
                        const urlParams = new URLSearchParams(new URL(movieurl).search)

          setmovieurl(urlParams.get('v'))
                        console.log(movieurl)
                    }).catch((err)=>{
                                console.log(err);
                    })
            }
    }

    return(
            <div className="row">
                <h1>{title}</h1>
                <div className="flex_movie">
                {
                    
                    Movie.map((values,key)=>{
                        moviecount++;
                        if(moviecount===10){
                            moviecount--;
                            return;
                        }
                        return(
                            <>
                           <h1 className="items">
                            <img onClick={()=>{handleurl(values)}} className="poster" src={`https://image.tmdb.org/t/p/w200${values.poster_path}`}/>
                            <br/>
                            <span className="poster_title">{values.name?values.name:values.title}</span>
                            </h1>   
                            </>
                        )
                    })
                }
                {movieurl && <Youtube videoId={movieurl} />}
                </div>
            </div>  
    )
}
export default Row;