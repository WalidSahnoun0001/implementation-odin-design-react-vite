import '../styles/features.css'
import DeskImg from '../assets/desk.jpg'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

function Features() {

    const features = [
        {feature: "Responsive Design", icon: faCheck},
        {feature: "Modern and Clean" , icon: faCheck},
        {feature: "Help File Included" , icon: faCheck}
    ]

  return (
    <div className='features-logic' id="apps">
        <div className="part">
            <div className="content">
            <h2>We offer modern and clean newsletter design</h2>
            <div className="all-features">
                {
                    features.map((feature)=> (
                        <div className="feature" key={feature.feature}>
                            <span><FontAwesomeIcon className='ic' icon={feature.icon}></FontAwesomeIcon></span>
                            <p>{feature.feature}</p>
                        </div>
                    ))
                }
            </div>
            <button>Learn More</button>
            </div>
        </div>
        <div className="part">
            <figure>
                <img src={DeskImg} alt="" />
            </figure>
        </div>
    </div>
  )
}

export default Features