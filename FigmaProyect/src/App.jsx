import Navbar from "./components/Navbar/Navbar"
import Clients from "./components/Clients/Clients"
import HeroSection from "./components/Hero/HeroSection"
import Community from "./components/Community/Community"
import Unlock from "./components/Unlock/Unlock"

function App() {
  

  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div>
      <Clients/>
    </div>
    <div>
      <HeroSection/>
    </div>
    <div>
      <Community/>
    </div>
    <div>
      <Unlock/>
    </div>
    </>
  )
}

export default App
