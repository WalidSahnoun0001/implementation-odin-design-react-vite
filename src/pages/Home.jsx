import Blog from "../components/Blog"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import More from "../components/More"
import Navbar from "../components/Navbar"
import Services from "../components/Services"
import Start from "../components/Start"
import Video from "../components/Video"
import '../styles/home.css'


function Home() {

  return (
    <>
    <section className="hero-section">
        <Navbar />
        <Hero />
    </section>
    <section>
      <Services />
    </section>
    <section>
      <Features />
    </section>
    <section>
      <Video />
    </section>
    <section>
      <Blog />
    </section>
    <section>
      <Start />
    </section>
    <section>
      <More />
    </section>
    <section>
      <Footer />
    </section>
    </>
  )
}

export default Home