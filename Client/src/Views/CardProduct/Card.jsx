import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { UseShopCar } from '../../../context/ShoppingContext';
import { UseAuth } from '../../../context/AuthContext';

export const Card = (props) => {
  const { AddProduct } = UseShopCar();
  const { isAuthenticated } = UseAuth();
  return (
    <>
      <div className="  m-5 flex flex-col max-w-[10rem] cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
        <Link to={`/products/${props.id}`}>
          <div className="flex justify-center">
            <img
              className=" rounded-lg max-h-36  object-cover object-center"
              src={props.image}
              alt="product"
            />
          </div>
        </Link>
        <p className="my-4 pl-4 font-semibold text-xs text-gray-500 whitespace-nowrap truncate">
          {props.name}
        </p>
        <p className="mb-4 ml-4 text-md font-semibold text-gray-800">
          {props.price}$
        </p>
        {isAuthenticated == true ? (
          <button
            onClick={() => AddProduct(props.data)}
            className=" flex gap-1 items-center justify-center  rounded-xl bg-purple-500  p-1 font-medium text-white transition duration-200 hover:bg-purple-600 active:bg-purple-700 dark:bg-purple-400 dark:text-white dark:hover:bg-purple-300 dark:active:bg-purple-200"
          >
            <MdOutlineShoppingCart size={25} />
            Add
          </button>
        ) : (
          <></>
        )}
        <></>
      </div>
    </>
  );
};
