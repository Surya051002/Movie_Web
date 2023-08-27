import {FaSearch} from 'react-icons/fa';
import logo from '../media/logo.jpg'
import '../Componentscss/Navbarcss.css'
const Navbar=()=>{
    return(
        <>
         
            <img  src={logo} width={200} height={100} />
            
                <input type="text" placeholder="search"/>
                <button className='icon'>
                    <FaSearch/>
                </button>
            
            
        
        </>
    )
}
export default Navbar;