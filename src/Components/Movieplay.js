import YouTube from "react-youtube";
import '../App.css';
const Movieplay=({url})=>{
    const opts={
        margintop:'10',
        marginleft:'70',
        Width:'2920',
        height:'500',
        position:'relative',
        margintop:"20",
        playerVars:{
            autoplay:1,
        },
    };
    return(
        <>
        <YouTube videoId={url} opts={opts} className="youtube" style={{marginLeft:50,borderRadius:40}} />
        
        </>
    )
}
export default Movieplay;