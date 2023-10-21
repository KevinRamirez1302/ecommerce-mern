import { useEffect, useState } from 'react';
import axios from 'axios';

import imgEcommerce from '/img/ecommerce.jpg';

export const MainPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/getProducts')
      .then((data) => setData(data.data));
  }, []);

  return (
    <>
      <section
        className=" flex flex-col justify-end items-end p-8"
        id="promotion"
      >
        <img src={imgEcommerce} alt="" />
        <button className=" px-4 py-2 absolute transition-all hover:bg-violet-600 bg-violet-800 md:px-10 md:py-7 rounded text-white font-semibold">
          Shop Now
        </button>
      </section>
      <div className="flex justify-center">
        {data.map(({ name, price, image }) => {
          return (
            <div
              className="flex flex-col m-10 justify-center flex-wrap items-center text-center "
              key={name}
            >
              <h1 className="p-4 font-bold">{name}</h1>
              <img className=" h-48 w-40 mw-40" src={image} alt="" />
              <p className="font-bold m-2">{price}$</p>
              <p className=" font-semibold my-3 text-center">{name}</p>
              <button className=" transition-all hover:bg-violet-600 bg-violet-800 px-2 py-2 rounded text-white font-semibold">
                Add card
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
