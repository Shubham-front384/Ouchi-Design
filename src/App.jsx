import About from "./Components/About"
import Client from "./Components/Client"
import EyePlay from "./Components/EyePlay"
import LandingPage from "./Components/LandingPage"
import Marque from "./Components/Marque"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"

const App = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <EyePlay />
      <Projects />
      <Client />
    </div>
  )
}

export default App
