import { Button } from '@chakra-ui/react'
import { CarProduct } from '../PrivateViews/shoppinComponents/carProduct.jsx'
import { UseShopCar } from '../../context/ShoppingContext.jsx'
import { Link } from 'react-router-dom'
import Mastercard from '/img/mastercard.png'
import Visa from '/img/visa.png'
import Binance from '/img/Binance-pay.jpg'
import American from '/img/american-express.png'
import paypal from '/img/paypal.png'

export const CarSection = () => {
  const { allProduct, totalPrice } = UseShopCar()

  return (
    <>
      <section className=" flex bg-gray-100 h-[90vh] w-full justify-around flex-col sm:flex-row gap-4 items-center">
        <div className="md:flex-col w-4/6 md:w-5/12">
          {allProduct.map(({ name, image, _id, price, quantity }) => (
            <CarProduct
              id={_id}
              name={name}
              image={image}
              price={price * quantity}
              key={_id}
              quantity={quantity}
            />
          ))}
        </div>

        <div className="flex flex-col gap-10 w-6/12 items-center justify-center ">
          <div className=" flex items-center flex-col bg-white shadow-lg p-24">
            <h1 className="text-center text-3xl font-montserrat font-semibold">
              Summary
            </h1>
            <div className=" ">
              <p className="text-neutral-500 text-xl font-montserrat m-2">
                Sub total: {totalPrice()}
              </p>
              <p className="text-neutral-500 text-xl font-montserrat m-2">
                Shipping: 1.99${' '}
              </p>
              <p className="text-neutral-500 text-xl font-montserrat m-2">
                Total: {parseInt(totalPrice()) + 4.99}$
              </p>
            </div>
            <Button className=" " color={'white'} colorScheme="purple">
              <Link to="Payment">CHECKOUT</Link>
            </Button>
          </div>
          <div className=" bg-white border-blacks p-10 shadow-lg  ">
            <h1 className=" text-center  text-lg font-montserrat font-semibold">
              Payment Method
            </h1>
            <div className="w-full mt-5 gap-3 flex justify-center items-center">
              <img className="w-10" src={Mastercard} alt="" />
              <img className="w-10" src={Visa} alt="" />
              <img className="w-10" src={American} alt="" />
              <img className="w-10" src={paypal} alt="" />
              <img className="w-10" src={Binance} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
