import '../styles/services.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTv, faPlug, faSearch} from '@fortawesome/free-solid-svg-icons'

function Services() {

  const data = [
    {
      id: 1,
      icon: faSearch,
      title: "Gread Ideas",
      text: "Creative Minds on Action",
      color: "#355563"
    },
    {
      id: 2,
      icon: faTv,
      title: "Advertise With Us",
      text: "We are Big and Loud",
      color: "#2B2D3D"
    },
    {
      id: 3,
      icon: faPlug,
      title: "Work With Us",
      text: "Work is Our Second Name",
      color: "#565F5E"
    }
  ]

  return (
    <div className='box' id='services'>
      {
        data.map((service)=> (
          <div className='service' key={service.id} style={{
            backgroundColor: service.color
          }}>
            <div style={{color: "#26EB8B", fontSize: 30}}><FontAwesomeIcon icon={service.icon}></FontAwesomeIcon></div>
            <h2 style={{color: "#fff", marginBottom: 10}}>{service.title}</h2>
            <p style={{color: "#26EB8B"}}>{service.text}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Services