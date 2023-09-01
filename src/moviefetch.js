
const moviefetch=async (url)=>{
    
    const data=await fetch(`https://api.themoviedb.org/3/${url}`).then((response)=>{
        return response.json()
    }).then((msg)=>{return msg.results}).catch((err)=>{console.log(err)});
    return data;
}
export default moviefetch;

