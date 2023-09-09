import { useEffect, useState } from "react";
import moviefetch from "../moviefetch";
import '../Componentscss/Rowcss.css'
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const Row=({url,title,setPlay})=>{
    const youtubeapi='AIzaSyCzg-pJZkc1u714afgIX46U8LtEKfrhcLA'
    var [Movie,setMovie]=useState([]);
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

    async function handleurl(currentmovie){
            if(movieurl===currentmovie){
                setmovieurl("");
            }
            else{
                  const req=await fetch(`https://www.googleapis.com/youtube/v3/search?q=${currentmovie}trailer%20trailer&part=snippet&type=video&key=${youtubeapi}`).then((r)=>r.json()).catch((err)=>console.log(err));
                  console.log(req);
                  const temp= await req.items[0].id.videoId;
                  setmovieurl(temp)
                  console.log(movieurl);
                  setPlay(temp);
            }
    }

   
    var c=10;

    return(
            <div className="row">
                
                <h1>{title}</h1>
                <div className="flex_movie">
                {
                    
                    Movie.map((values,key)=>{
                       if(c<3)
                        return;     
                       c--;
                        return(
                            <>
                           <h1 className="items">
                            <img onClick={()=>{handleurl(values.name?values.name:values.title)}} className="poster" src={`https://image.tmdb.org/t/p/w200${values.poster_path}`}/>
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