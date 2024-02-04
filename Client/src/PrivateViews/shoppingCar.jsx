import { Button } from '@chakra-ui/react';
import { CarProduct } from '../PrivateViews/shoppinComponents/carProduct.jsx';
import { UseShopCar } from '../../context/ShoppingContext.jsx';

export const CarSection = () => {
  const { allProduct, totalPrice } = UseShopCar();

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div className="md:flex-col m-4">
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

        <div className="flex flex-col items-center justify-center">
          <p className="text-neutral-500"> Sub total: {totalPrice()}</p>
          <p className="text-neutral-500">
            Total(Include Shipping): {parseInt(totalPrice()) + 4.99}$
          </p>
          <Button className="mt-4" color={'white'} colorScheme="purple">
            CHECKOUT
          </Button>
        </div>
      </section>
    </>
  );
};
