import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from '../CardProduct/Card'
import { Stack, Select } from '@chakra-ui/react'

export const AllProducts = () => {
  const [data, setData] = useState([])
  const [category, setCategory] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3000/allProducts')
      .then((data) => setData(data.data))
  }, [])
  useEffect(() => {
    axios
      .get(`http://localhost:3000/allProducts/category/${category}`)
      .then((data) => setData(data.data))
  }, [category])

  return (
    <>
      <section
        onChange={(e) => {
          setCategory(e.target.value)
        }}
        className=" bg-gray-100"
      >
        <Stack>
          <Select placeholder="Categoria" padding={4} name="" id="">
            <option value="short">Short</option>
            <option value="phone">phone</option>
            <option value="videogame">videogames</option>
            <option value="shoes">shoes</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </Select>
        </Stack>

        <div className="w-full flex flex-wrap p-10 items-center justify-center ">
          {data.map(({ name, price, image, _id, quantity }) => {
            return (
              <Card
                data={{ name, price, image, quantity, _id }}
                key={_id}
                id={_id}
                name={name}
                price={price}
                image={image}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}
