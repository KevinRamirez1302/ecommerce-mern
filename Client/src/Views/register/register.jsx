import alienImg from '/img/alien.png';
import { useEffect, useState } from 'react';
import { UseAuth } from '../../../context/AuthContext.jsx';
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { Signup, errors, isAuthenticated } = UseAuth();
  const navigate = useNavigate();
  const dataSend = {
    name,
    email,
    password,
  };

  useEffect(() => {
    if (isAuthenticated) navigate('/aprobado');
  }, [isAuthenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Signup(dataSend);
  };

  return (
    <>
      <section className="w-full h-92 flex items-center justify-center">
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

            <input
              className=" bg-gray-200 transition-all m-1 text-black p-1 px-3 rounded focus:outline-none focus:outline-violet-800"
              type="text"
              placeholder="Name"
              onChange={(data) => {
                setName(data.target.value);
              }}
            />
            <input
              className="w-76 bg-gray-200 transition-all m-1 text-black p-2 focus:outline-none px-4 focus:outline-violet-800 rounded"
              type="email"
              placeholder="email"
              onChange={(data) => {
                setEmail(data.target.value);
              }}
            />
            <input
              className=" w-78 bg-gray-200 transition-all m-1 focus:outline-none text-black p-2 px-4 focus:outline-violet-800 rounded"
              type="password"
              placeholder="Password"
              onChange={(data) => {
                setPassword(data.target.value);
              }}
            />
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
        <div className=" hidden md:block rounded-md p-8  w-2/5 h-92 md:flex flex-col items-center text-center justify-center bg-gradient-to-r from-violet-800 to-fuchsia-400 ">
          <div className=" m-8">
            <h1 className=" m-3 font-bold  text-3xl text-white">New Here ?</h1>
            <p className="font-bold text-white text-xl text-center ">
              Sign up and Style at your Fingertips - Shop E-commerce Cloth
              Today!
            </p>
          </div>
          <img src={alienImg} className=" w-40" alt="" />
        </div>
      </section>
    </>
  );
};
