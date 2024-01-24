import { FaTrashCan } from 'react-icons/fa6';
import { UseShopCar } from '../../../context/ShoppingContext';

export const CarProduct = (props) => {
  const { deleteProduct } = UseShopCar();
  return (
    <>
      <div className=" content-between flex justify-around items-center p-2 bg-slate-100 rounded-sm">
        <p>{props.quantity}</p>
        <figure className=" max-w-20 w-20">
          <img
            src={props.image}
            alt=""
            className=" max-w-20 max-h-26 h-26 w-20"
          />
        </figure>
        <p className=" max-w-10">{props.name}</p>
        <p>{props.price}$</p>
        <button onClick={() => deleteProduct(props.id)}>
          <FaTrashCan />
        </button>
      </div>
    </>
  );
};
