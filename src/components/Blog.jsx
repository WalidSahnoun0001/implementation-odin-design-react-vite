import '../styles/blog.css'
import img from '../assets/sea.jpg'

function Blog() {

    const blogContent = [
        {id: 1, img: img, title: "Some Random Text", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos natus. Lorem ipsum dolor sit.", btnContent: "Read More"},
        {id: 2, img: img, title: "Some Random Text", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos natus. Lorem ipsum dolor sit.", btnContent: "Read More"}
    ]

  return (
    <div className="blog" id="blog">
        <div className="header">
            <h2>Some news from our blog</h2>
            <p>Cras ultricies ligula seo</p>
        </div>
        <div className="container">
            {
                blogContent.map((card) => (
                    
                <div className="card" key={card.id}>
                    <figure>
                        <img src={card.img} alt="" />
                        <figcaption>{card.title}</figcaption>
                    </figure>
                    <div className="card-content">
                        <p>{card.content}</p>
                        <button>{card.btnContent}</button>
                    </div>
                </div>    
                ))
            }
        </div>
        <div className="plus-btn">
            <a href="#">+</a>
        </div>
    </div>
  )
}

export default Blog