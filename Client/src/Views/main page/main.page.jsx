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
        className=" flex flex-col justify-end items-center md:p-10"
        id="promotion"
      >
        <img className=" hidden lg:block lg:w-4/5" src={imgEcommerce} alt="" />
        <button className=" hidden lg:block px-4 py-2 absolute transition-all hover:bg-violet-600 bg-violet-800 md:px-10 md:py-5 rounded text-white font-semibold">
          Shop Now
        </button>
      </section>
      <section className="flex flex-wrap justify-center">
        {data.map(({ name, price, image }) => {
          return (
            <div
              key={name}
              className="flex max-h-full items-center justify-center bg-gray-100"
            >
              <div className="mx-auto px-5">
                <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
                  <img
                    className="w-full rounded-lg object-cover object-center"
                    src={image}
                    alt="product"
                  />
                  <p className="my-4 pl-4 font-bold text-gray-500">{name}</p>
                  <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">
                    {price}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <div className=" w-full">
        <div className="flex flex-col md:flex-row justify-between items-center p-10 bg-indigo-800 text-white">
          <div className="m-auto">
            <div className="text-center">
              <p>Stay tuned with latest news and updates.</p>
              <h2 className="font-bold">Download the temple app now</h2>
            </div>
            <div className="pt-2 flex justify-center gap-x-3">
              <a
                href=""
                className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
              >
                <img
                  src="https://www.logo.wine/a/logo/App_Store_(iOS)/App_Store_(iOS)-Badge-Logo.wine.svg"
                  alt="App Store"
                  className="w-36 lg:w-44 xl:w-auto"
                  width="209"
                  height="60"
                />
              </a>

              <a
                href=""
                className="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
              >
                <img
                  src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Badge-Logo.wine.svg"
                  alt="App Store"
                  className="w-36 lg:w-44 xl:w-auto"
                  width="209"
                  height="60"
                />
              </a>
            </div>
          </div>

          <div className="w-full md:w-6/12">
            <form className="w-full" noValidate>
              <div className="flex flex-col items-center">
                <div className="w-full">
                  <input
                    id="subscription_email"
                    name="subscription_email"
                    type="email"
                    placeholder="Write your email here"
                    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-heading md:h-12 px-4 lg:px-7 h-12 lg:h-14 text-center bg-white text-black"
                    autoComplete="off"
                    spellCheck="false"
                    aria-invalid="false"
                  />
                </div>
                <button
                  data-variant="flat"
                  className="w-full bg-black transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-800 mt-2 flex-shrink-0"
                >
                  <span className="lg:py-0.5">Subscribe</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
