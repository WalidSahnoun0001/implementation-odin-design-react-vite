import logo from '../assets/logo.png'
import '../styles/navbar.css'

function Navbar() {
    
    return (
    <header>
        <h2><img src={logo} alt="" /></h2>
        <nav>
            <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#apps">Apps</a></li>
                <li><a href="#blog">Blog</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar