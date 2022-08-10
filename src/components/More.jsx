import '../styles/more.css'
import logo from '../assets/logo.png'

function More() {
  return (
    <div className="more-info">
        <div className="half">
           <div className="more-content">
            <span><img src={logo} alt="" /></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti assumenda quae iure.</p>
           </div>
        </div>
        <div className="half">
            <div className="links">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-dribbble"></i>
            <i className="fa-brands fa-google-plus-g"></i>
            <i className="fa-brands fa-youtube"></i>
            </div>
            <div className="site">
                www.Odin.com
            </div>
            <div>
                contact@odin.com
            </div>
        </div>
    </div>
  )
}

export default More