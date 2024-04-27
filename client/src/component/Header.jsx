// import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import styles from "./styles.module.css"
export default function Header() {
  return (
    <header>
        <div>
        <Link to='/'>

        <h1 style={{paddingTop:"23px"}}>
            <span >Room</span>
            <span>Rental</span>
            <span >System</span>
            
        </h1>
        </Link>
        <form style={{
            // backgroundColor:"lightgoldenrodyellow",
            padding:"3px",
            display:"flex",
            alignItems:"center",
            alignItems:"right",
            height:"43px",
            background:'transparent'
        }}>
        <input type="text" placeholder="Search..."
        style={{backgroundColor:"lightgoldenrodyellow",paddingRight:"50px",display:"flex",alignItems:"center",outlineColor:"lightgoldenrodyellow"}}
        ></input>
        {/* <FaSearch/> */}
        <ul style={{display:"flex",gap:"4px"}}>
           <Link to='/'> <li style={{display:"flex",alignContent:"center"}}>Home</li></Link>
            <Link to='/login'><li style={{display:"flex",alignContent:"center"}}>login</li></Link>
            <Link to='/register'><li style={{display:"flex",alignContent:"center"}}>Register</li></Link>
           
        </ul>
    </form>
    </div>
</header>
)
}
