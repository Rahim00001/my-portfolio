
import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
// import FindMe from './components/FindMe/FindMe'
import Footer from './components/Footer/Footer'
import Language from './components/Language/Language'
import MySkills from './components/MySkills/MySkills'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Education></Education>
      <MySkills></MySkills>
      <Language></Language>
      <Projects></Projects>
      <Contact></Contact>
      {/* <FindMe></FindMe> */}
      <Footer></Footer>
    </>
  )
}

export default App
