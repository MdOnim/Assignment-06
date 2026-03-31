
import { useState } from 'react'
import './App.css'
import Banner from './assets/Component/banner/Banner'
import Cartsection from './assets/Component/cartsection/Cartsection'
import Models from './assets/Component/models/Models'
import Navbar from './assets/Component/navBar/Navbar'
import Rating from './assets/Component/rating/Rating'
import Tabs from './assets/Component/tabs/Tabs'
import Premiumdigital from './assets/Component/premiumDigital/Premiumdigital'

const getModels = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

const modelPromise = getModels()



function App() {
const [activeTab, setActiveTab] = useState("Products");
const [cart, setCart] = useState([]);
// console.log(cart);
// console.log(activeTab);

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <Rating></Rating>
     <Premiumdigital></Premiumdigital>
     <Tabs activeTab={activeTab} setActiveTab={setActiveTab} cart={cart}></Tabs>
    {activeTab === "Products" && <Models cart={cart} setCart={setCart} modelPromise ={modelPromise}></Models>}
    {activeTab === "Cart" && <Cartsection cart={cart} setCart={setCart}  ></Cartsection>}

    
    


    

    

      

      

      
    </>
  )
}

export default App
