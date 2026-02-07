import About from "./Components/About"
import LandingPage from "./Components/LandingPage"
import Marque from "./Components/Marque"
import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
    </div>
  )
}

export default App
