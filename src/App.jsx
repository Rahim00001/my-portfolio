
import './App.css'
import Contact from './components/Contact/Contact'
import Education from './components/Education/Education'
// import FindMe from './components/FindMe/FindMe'
import Footer from './components/Footer/Footer'
import Language from './components/Language/Language'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <h2 className='text-center text-6xl'>Portfolio</h2>
      <Navbar></Navbar>
      <Education></Education>
      <Language></Language>
      <Contact></Contact>
      {/* <FindMe></FindMe> */}
      <Footer></Footer>
    </>
  )
}

export default App
