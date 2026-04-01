
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Component/Banner/Banner'
import Cards from './Component/Main/Cards/Cards'
import TabSection from './Component/Main/Cards/TabSection'
import Navbar from './Component/Navbar/Navbar'
import Stats from './Component/Stats/Stats'
import Cart from './Component/Main/Cards/Cart'
import Card from './Component/Main/Cards/Card'


const getCards = async () => {
  const res = await fetch("/product.json")
  return res.json()
}


function App() {

  const [activeTab, setActiveTab] = useState("Products");
  // console.log(activeTab);
  const cardsPromise = getCards();
  const [carts, setCarts] = useState([]);

  // console.log(carts);



  return (
    <>

      <Navbar />
      <Banner />
      <Stats />
      <TabSection activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "Products" ? <Suspense>
        <Cards cardsPromise={cardsPromise} carts={carts} setCarts={setCarts} />
      </Suspense> : <Cart carts={carts} />}



      <h1 className='text-center text-black text-3xl font-bold bg-amber-100'>
        DigiTool Platform
      </h1>
      {/* <button className='btn text-2xl font-bold flex '>Button </button> */}
      <button className="btn btn-primary">Primary</button>

    </>
  )
}

export default App
