import { useEffect, useState } from 'react'
import axios from 'axios'

export const MainPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/getProducts')
      .then((data) => setData(data.data))
  }, [])

  return (
    <>
      <div className="container flex flex-col mx-auto bg-white">
        <div className="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
          <div className=" m-10 flex flex-col justify-center col-span-1 text-center lg:text-start">
            <div className="flex items-center justify-center mb-4 lg:justify-normal">
              <h4 className="ml-2 text-sm font-bold tracking-widest text-primary uppercase">
                Explore All
              </h4>
            </div>
            <h1 className="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl text-dark-grey-900">
              Enjoy Shopping
            </h1>
            <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
              Say goodbye to endless hours spent on building templates from
              scratch. Experience the quickest, most responsive, and trendiest
              dashboard solution available. Seriously.
            </p>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <button className="flex items-center py-4 text-sm font-bold text-white px-7 bg-purple-blue-500 hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 transition duration-300 rounded-xl">
                Get started now
              </button>
              <button className="flex items-center py-4 text-sm font-medium px-7 text-dark-grey-700 hover:text-dark-grey-900 transition duration-300 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                ></svg>
                Book a free call
              </button>
            </div>
          </div>
          <div className="items-center justify-end hidden col-span-1 md:flex">
            <img
              className="w-4/5 rounded-md"
              src="https://img.freepik.com/free-vector/online-shopping-banner-mobile-app-templates-concept-flat-design_1150-34862.jpg?w=740&t=st=1699647823~exp=1699648423~hmac=b7292655f62502938c8c2ccd78d2f702f24b31839d166b493223e13b067bd44f"
              alt="header image"
            />
          </div>
        </div>
      </div>

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
          )
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
  )
}
