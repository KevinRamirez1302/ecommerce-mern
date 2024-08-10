import alienImg from '/img/alien.png'
import { useEffect, useState } from 'react'
import { UseAuth } from '../../../context/AuthContext.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { Input, InputGroup, Button, InputRightElement } from '@chakra-ui/react'

export const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)

  const { Signup, errors, isAuthenticated } = UseAuth()
  const navigate = useNavigate()
  const dataSend = {
    name,
    email,
    password
  }

  useEffect(() => {
    if (isAuthenticated) navigate('/aprobado')
  }, [isAuthenticated])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Signup(dataSend)
  }

  return (
    <>
      <section className=" p-20  bg-gray-200">
        <div className="w-full h-92 flex items-center bg-white justify-center rounded-xl shadow-xl ">
          <div className="w-3/5 flex flex-col items-center justify-center h-80">
            <form
              className=" w-3/5 flex flex-col items-center justify-center h-80"
              action=""
              onSubmit={handleSubmit}
            >
              <h2 className="text-center mb-8 text-xl font-bold text-violet-800 ">
                Register
              </h2>

              {errors.map((err, i) => (
                <p key={i} className=" text-red-500 p-1 rounded-sm m-1">
                  {err}
                </p>
              ))}

              <Input
                margin={2}
                variant="filled"
                htmlSize={25}
                width="auto"
                placeholder="Name"
                focusBorderColor="purple.400"
                onChange={(data) => {
                  setName(data.target.value)
                }}
              />
              <Input
                margin={2}
                variant="filled"
                htmlSize={25}
                width="auto"
                focusBorderColor="purple.400"
                placeholder="Email"
                onChange={(data) => {
                  setEmail(data.target.value)
                }}
              />

              <InputGroup htmlSize={20} width="auto" size="md">
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                  htmlSize={18}
                  width="auto"
                  focusBorderColor="purple.400"
                  variant="filled"
                  onChange={(data) => {
                    setPassword(data.target.value)
                  }}
                />
                <InputRightElement width="4rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <button
                type="submit"
                className=" bg-violet-800 pl-5 pr-5 pt-2 pb-2  w-40 m-4 rounded-md text-white font-bold"
              >
                Enter
              </button>
            </form>
            <p>
              already have an account ?
              <Link className=" font-bold text-purple-800 " to={'/login'}>
                Log in
              </Link>
            </p>
          </div>
          <div className=" hidden md:flex rounded-md p-8  w-2/5 h-92 flex-col items-center text-center justify-center bg-gradient-to-r from-violet-800 to-fuchsia-400 ">
            <div className=" m-8">
              <h1 className=" m-3 font-bold  text-3xl text-white">
                New Here ?
              </h1>
              <p className="font-bold text-white text-xl text-center ">
                Sign up and Style at your Fingertips - Shop E-commerce Cloth
                Today!
              </p>
            </div>
            <img src={alienImg} className=" w-40" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}
