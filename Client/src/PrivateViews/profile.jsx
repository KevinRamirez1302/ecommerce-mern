import { UseAuth } from '../../context/AuthContext';
import { Input } from '@chakra-ui/react';

export const Profile = () => {
  const { user } = UseAuth();
  const { name, email, id } = user;

  return (
    <>
      <section className=" flex flex-col items-center w-full h-screen">
        <div className="flex flex-col p-10 items-center gap-10 justify-center">
          <img
            className="w-28 rounded-md"
            src="https://cdn.pixabay.com/photo/2023/05/08/09/33/cat-7978052_1280.jpg"
            alt=""
          />
          <h1 className=" font-bold text-2xl text-gray-600">
            Welcome {name.toUpperCase()}
          </h1>
        </div>
        <h1 className="font-bold text-2xl mb-5 text-gray-600">Your Data</h1>
        <div className="flex flex-col gap-4">
          <Input value={email} />
          <Input value={id} />
        </div>
      </section>
    </>
  );
};
