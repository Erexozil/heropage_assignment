import Logoimage from "../images/logo.svg"
import '../../src/App.css';
const Header = ()=>{
  return (
    <div className="head-nav">
      <navLeft>
        <img src={Logoimage} alt="logo.svg"/>
        <select>
          <option>Features</option>
        </select>
        <select>
          <option>Company</option>
        </select>
        <nav>Career</nav>
        <nav>About</nav>
      </navLeft>
      <navRight>
        <nav>Login</nav>
        <button className="btnr">Register</button>
        
      </navRight>
     
    </div>
    
  )
}
export default Header;