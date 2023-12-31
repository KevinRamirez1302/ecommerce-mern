import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from '../CardProduct/Card';

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
        {data.map(({ name, price, image, _id }) => {
          return (
            <Card key={_id} id={_id} name={name} price={price} image={image} />
          );
        })}
      </section>
    </>
  );
};
