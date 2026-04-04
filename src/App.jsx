
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Component/Banner/Banner'
import Cards from './Component/Main/Cards/Cards'
import TabSection from './Component/Main/Cards/TabSection'
import Navbar from './Component/Navbar/Navbar'
import Stats from './Component/Stats/Stats'
import Cart from './Component/Main/Cards/Cart'
import { ToastContainer } from 'react-toastify'
import Footer from './Component/Footer/Footer'
import Steps from './Component/Steps/Steps'


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

      <Navbar carts={carts} />
      <Banner />
      <Stats />
      <TabSection activeTab={activeTab} setActiveTab={setActiveTab} carts={carts} />

      {activeTab === "Products" ? <Suspense>
        <Cards cardsPromise={cardsPromise} carts={carts} setCarts={setCarts} />
      </Suspense> :
        <Cart carts={carts} setCarts={setCarts} />}
      <Steps />

      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
