import { useEffect, useState } from 'react'
import axios from 'axios'
import { useTheme } from '../context/ThemeContext'

interface Product {
  id: number
  title: string
  image: string
  price: number
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const { theme } = useTheme()

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => setProducts(res.data))
  }, [])

  const isCardGrid = theme === 'theme3'
  const isSidebarList = theme === 'theme2'

  return (
    <div
      className={
        isCardGrid
          ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6'
          : 'flex flex-col gap-4 mt-6'
      }
    >
      {products.map((p) => (
        <div
          key={p.id}
          className={`border p-4 rounded shadow ${
            isSidebarList ? 'bg-gray-700 text-white' : 'bg-white'
          }`}
        >
          <img
            src={p.image}
            alt={p.title}
            className="h-32 object-contain mx-auto mb-4"
          />
          <h3 className="text-lg font-bold">{p.title}</h3>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  )
}
