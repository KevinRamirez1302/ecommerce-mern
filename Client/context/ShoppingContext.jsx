import { useContext, createContext, useState, useEffect } from 'react'
import { getProduct, deleteItem, addShoppinCar } from '../api/shoppingCar.jsx'
import { all } from 'axios'

const CarContext = createContext()

export const UseShopCar = () => {
  const context = useContext(CarContext)

  if (!context) {
    throw new Error('UseShopCar must be used within a CarShopProvider')
  }

  return context
}

// eslint-disable-next-line react/prop-types
export const ShopCarProvider = ({ children }) => {
  const [allProduct, setAllProduct] = useState([])

  useEffect(() => {
    getProduct().then((data) => setAllProduct(data.data))
  }, [allProduct])

  const totalPrice = () => {
    const total = allProduct
      .map(({ price }) => price)
      .reduce((acc, val) => acc + val, 0)
    return total.toFixed(2)
  }

  const AddProduct = async (newProduct) => {
<<<<<<< HEAD
    const existingProduct = allProduct.find(
      ({ _id }) => _id === newProduct._id
    );
    if (existingProduct) {
      console.log('ya existe el producto');
    } else {
      console.log('No existe, se ha guardado');
=======
    try {
      await addShoppinCar(newProduct)
    } catch (err) {
      console.log('Producto no pudo ser agregado')
>>>>>>> d8c715197c61162bd7d09532a5e4c812f2ad7edd
    }
  }

  const deleteProduct = async (id) => {
    await deleteItem(id)
  }

  return (
    <CarContext.Provider
      value={{ AddProduct, allProduct, deleteProduct, totalPrice }}
    >
      {children}
    </CarContext.Provider>
  )
}
