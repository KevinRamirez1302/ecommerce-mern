import { useState, useEffect } from 'react';
import axios from 'axios';

export const AllProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/allProducts')
      .then((data) => setData(data.data));
  }, []);
  console.log(data);
  return (
    <>
      <section className="w-full flex flex-wrap p-10 items-center justify-center bg-gray-100">
        {data.map(({ name, price, image }) => {
          return (
            <div key={name} className=" flex  mx-auto px-5">
              <div className=" max-w-[10rem] cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                <img
                  className=" rounded-lg object-cover object-center"
                  src={image}
                  alt="product"
                />
                <p className="my-4 pl-4 font-bold text-gray-500">{name}</p>
                <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">
                  {price}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
