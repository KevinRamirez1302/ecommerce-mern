import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from '../CardProduct/Card.jsx'

export const MainPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/getProducts')
      .then((data) => setData(data.data))
  }, [])

  return (
    <>
      <div className=" container flex flex-col mx-auto bg-white">
        <div className="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
          <div className=" m-10 flex flex-col justify-center col-span-1 text-center lg:text-start">
            <h1 className="  mb-8 text-4xl font-extrabold  lg:text-6xl text-purple-700  ">
              Enjoy Shopping
            </h1>
            <p className="mb-6 font-montserrat font-normal leading-7 lg:w-3/4 text-grey-900">
              Say goodbye to endless hours spent on building templates from
              scratch. Experience the quickest, most responsive, and trendiest
              dashboard solution available. Seriously.
            </p>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <button className="flex items-center py-4 text-sm font-bold text-white px-7 bg-purple-blue-500 hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 transition duration-300 rounded-xl">
                Get started now
              </button>
              <button className="flex items-center justify-center rounded-xl bg-purple-900 px-3 py-2 text-base font-medium text-white transition duration-200 hover:bg-purple-600 active:bg-purple-700 dark:bg-purple-400 dark:text-white dark:hover:bg-purple-300 dark:active:bg-purple-200">
                Show Now !
              </button>
            </div>
          </div>
          <div className="items-center justify-end hidden col-span-1 md:flex">
            <img
              className=" rounded-lg"
              src="https://realestatemarket.com.mx/images/2023/02-febrero/06-02/Estrategias-ecommerce-para-los-pequenos-y-medianos-negocios.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <section className="flex flex-wrap md:p-10 items-center justify-center bg-gray-100">
        {data.map(({ name, price, image, _id }) => {
          return (
            <Card key={_id} id={_id} name={name} price={price} image={image} />
          )
        })}
      </section>
    </>
  )
}
