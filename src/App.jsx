import LandingPage from "./Components/LandingPage"
import Marque from "./Components/Marque"
import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <LandingPage />
      <Marque />
    </div>
  )
}

export default App
