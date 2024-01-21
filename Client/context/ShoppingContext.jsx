import { useContext, createContext, useState, useEffect } from 'react';
import { getProduct, deleteItem, addShoppinCar } from '../api/shoppingCar.jsx';
import { all } from 'axios';

const CarContext = createContext();

export const UseShopCar = () => {
  const context = useContext(CarContext);

  if (!context) {
    throw new Error('UseShopCar must be used within a CarShopProvider');
  }

  return context;
};

// eslint-disable-next-line react/prop-types
export const ShopCarProvider = ({ children }) => {
  const [allProduct, setAllProduct] = useState([]);

  const totalPrice = () => {
    const total = allProduct
      .map(({ price }) => price)
      .reduce((acc, val) => acc + val, 0);
    return total.toFixed(2);
  };

  const AddProduct = async (newProduct) => {
    const existingProduct = await allProduct.find(
      (product) => product._id === newProduct._id
    );

    console.log(existingProduct);

    try {
      addShoppinCar(newProduct);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (id) => {
    await deleteItem(id);
  };

  useEffect(() => {
    getProduct().then((data) => setAllProduct(data.data));
  }, [allProduct]);

  return (
    <CarContext.Provider
      value={{ AddProduct, allProduct, deleteProduct, totalPrice }}
    >
      {children}
    </CarContext.Provider>
  );
};
