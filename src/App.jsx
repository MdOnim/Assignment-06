
import './App.css'
import Banner from './assets/Component/banner/Banner'
import Models from './assets/Component/models/Models'
import Navbar from './assets/Component/navBar/Navbar'
import Rating from './assets/Component/rating/Rating'

const getModels = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

const modelPromise = getModels()



function App() {
 

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
    <Rating></Rating>
    <Models modelPromise ={modelPromise}></Models>


    

    

      

      

      
    </>
  )
}

export default App
