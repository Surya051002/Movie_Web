import { Axios } from "axios";
 const moviefetch=async(apilink)=>{
    
    
    return await fetch(`https://api.themoviedb.org/3//trending/all/week?api_key=43c2efb1339727e853ad3a88580951a3&language=en-US`).then((response)=>{
       
    return response.json();
    }).then((msg)=>{
      //console.log(typeof(msg.results))
         return msg.results;
    })
    .catch((err)=>{console.log("hii")});
}
export default moviefetch;
