import { MdOutlineShoppingCart } from 'react-icons/md';

export const Card = (props) => {
  return (
    <>
      <a href={`/products/${props.id}`}>
        <div className=" mx-5 flex flex-col max-w-[10rem] h-auto cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
          <img
            className=" rounded-lg max-h-36 object-cover object-center"
            src={props.image}
            alt="product"
          />
          <p className="my-4 pl-4 font-semibold text-xs text-gray-500">
            {props.name}
          </p>
          <p className="mb-4 ml-4 text-md font-semibold text-gray-800">
            {props.price}$
          </p>
          <button className=" flex gap-1 items-center justify-center  rounded-xl bg-purple-500  p-1 font-medium text-white transition duration-200 hover:bg-purple-600 active:bg-purple-700 dark:bg-purple-400 dark:text-white dark:hover:bg-purple-300 dark:active:bg-purple-200">
            <MdOutlineShoppingCart size={25} />
            Add
          </button>
        </div>
      </a>
    </>
  );
};
