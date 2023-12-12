
import './App.css'
import Education from './components/Education/Education'
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
      <Footer></Footer>
    </>
  )
}

export default App
