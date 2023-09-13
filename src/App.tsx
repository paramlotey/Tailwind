
import './App.css'
// import Cart from './pages/cart'

// import { CardWithForm } from './pages/cardComp'
import Features from './pages/features'
import Footer from './pages/footer'
// import Form from './pages/form'
import Hero from './pages/hero'
import Nav from './pages/nav'
import Products from './pages/products'



function App() {
 

  return (
    <>
    <Nav/>
    <Hero/>
     {/* <CardWithForm/> */}
     <Features/>
     <Products/>
     {/* <Cart/> */}
     <Footer/>
     
     {/* <div className='flex justify-center my-10'>
     <Form/>
     </div> */}
     
    </>
  )
}

export default App
