const Fetch=({url})=>{
    fetch(`https://api.themoviedb.org/3/${url}`).then((response)=>{
        response.json()
    }).then((msg)=>{console.log(msg)}).catch((err)=>{console.log(err)});
}
export default Fetch;