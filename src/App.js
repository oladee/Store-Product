import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Maincontent from './components/Maincontent'
import Sidebar from './components/Sidebar'


const baseApiurl = "https://fakestoreapi.com/"

const App = () => {
  const [pageTitle] = useState('STORE FRONT');
  const [products, setProducts] = useState([{
    id: null,
    title: null,
    price: null,
    description: null,
    category: null,
    image: null,
    rating: {
    rate: null,
    count: null
    }
    }])
    const [loading, setLoading] = useState(false)
    const getProducts = async () => {
      setLoading(true)
      try {
        const response = await fetch(baseApiurl + "products")
        const data = await response.json();
        console.log(data)
        if(data.id !== null){
          setProducts(data)
        setLoading(false)
        }
      } catch (error) {
        console.log(error)
        // setLoading(false)
      }
    }
    console.log(products)
    useEffect(()=>{
      getProducts()
    },[])
  return (
    <div  className='h-[100svh] bg-[#f5f5f5] overflow-hidden'>
      <Header pageTitle = {pageTitle}/>
      <section className='grid grid-cols-1 md:grid-cols-[5rem_1fr] lg:grid-cols-[15rem_1fr] h-full overflow-auto'>
        <Sidebar/>
        <Maincontent products={products} loading={loading}/>
      </section>

    </div>
  )
}

export default App
