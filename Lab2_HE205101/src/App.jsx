import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import products from './data/product'
import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0)

  const handleAddToCart = () => {
    setCartCount((count) => count + 1)
  }

  return (
    <>
      <Header cartCount={cartCount} />
      <Banner />

      <ProductList products={products} onAddToCart={handleAddToCart} />
      <Footer />
    </>
  )
}

export default App
