import { useEffect, useState } from "react";
import moviefetch from '../moviefetch.js'
import '../Componentscss/Rowcss.css'
const Row=({apilink})=>{
    
    const [list,setList]=useState([]);
    useEffect(()=>{
        
        async function movie(){
        
         const movies=await moviefetch(apilink);
       
         setList(movies);
       
        }
        movie();
    },[apilink])
    useEffect(()=>{
        console.log(list);
    },[list])
    return(
        <>
        <div className="row">
        {
            list.map((value,key)=>{
                return(
                    <b>{value.title}</b>
                )
            })
        }
        </div>
        </>
    )
}
export default Row;