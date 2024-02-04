import background from '/img/welcome.png';
import { useForm } from 'react-hook-form';
import { UseAuth } from '../../../context/AuthContext';
import { Link, Navigate } from 'react-router-dom';
import { Alert, AlertIcon, useToast } from '@chakra-ui/react';

export const Login = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { Login, errors: LoginErrors, isAuthenticated } = UseAuth();

  const onSubmit = async (data) => {
    const dataSave = {
      email: data.email,
      password: data.password,
    };

    await Login(dataSave);
  };

  if (isAuthenticated == true) return <Navigate to="/profile" replace />;
  return (
    <>
      <section className="w-full h-92 flex items-center justify-center">
        <div className="w-3/5 flex flex-col items-center justify-center h-80">
          <form
            className=" w-3/5 flex flex-col items-center justify-center h-80"
            action=""
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-center mb-10 text-xl font-bold text-violet-800 ">
              Login
            </h2>
            {LoginErrors.map((error, i) => (
              <Alert key={i} status="error">
                <AlertIcon />
                {error}
              </Alert>
            ))}

            <input
              className="w-80 bg-gray-200 transition-all m-1 text-black p-2 focus:outline-none px-4 focus:outline-violet-800 rounded"
              type="email"
              placeholder="email"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className=" text-red-500">Email is required</p>}
            <input
              className=" w-80 bg-gray-200 transition-all m-1 focus:outline-none text-black p-2 px-4 focus:outline-violet-800 rounded"
              type="text"
              placeholder="Password"
              {...register('password', { required: 'Password is required' })}
            />

            {errors.password && (
              <p className=" text-red-500">Password is required</p>
            )}
            <button
              type="submit"
              className=" bg-violet-800 pl-5 pr-5 pt-2 pb-2  w-40 m-4 text-white font-bold"
            >
              Enter
            </button>
          </form>
          <p>
            Dont have an account ?
            <Link className=" font-bold text-purple-800 " to={'/register'}>
              Register
            </Link>
          </p>
        </div>
        <div className=" w-2/5 h-92 flex flex-col items-center justify-center bg-gradient-to-r from-violet-800 to-fuchsia-400">
          <h1 className=" m-3 font-bold text-white text-3xl">
            Hey! Welcome back
          </h1>
          <img className=" w-72 h-auto" src={background} alt="" />
        </div>
      </section>
    </>
  );
};
