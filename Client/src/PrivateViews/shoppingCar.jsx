import { Button } from '@chakra-ui/react';
import { CarProduct } from '../PrivateViews/shoppinComponents/carProduct.jsx';
import { UseShopCar } from '../../context/ShoppingContext.jsx';

export const CarSection = () => {
  const { allProduct, totalPrice } = UseShopCar();

  return (
    <>
      <section className="flex items-center justify-between h-[80vh]">
        <div className="h-auto w-1/2">
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

        <div className=" flex flex-col items-center justify-center h-auto w-1/2">
          <div>
            <p className=" text-neutral-500">
              Total(Include Shipping): {totalPrice()}$
            </p>
          </div>
          <Button className=" m-4" color={'white'} colorScheme="purple">
            CHECKOUT
          </Button>
        </div>
      </section>
    </>
  );
};
