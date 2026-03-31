
import './App.css'
import Banner from './Component/Banner/Banner'
import Navbar from './Component/Navbar/Navbar'
import Stats from './Component/Stats/Stats'

function App() {


  return (
    <>

      <Navbar />
      <Banner />
      <Stats />

      <h1 className='text-center text-black text-3xl font-bold bg-amber-100'>
        DigiTool Platform
      </h1>
      {/* <button className='btn text-2xl font-bold flex '>Button </button> */}
      <button className="btn btn-primary">Primary</button>

    </>
  )
}

export default App
