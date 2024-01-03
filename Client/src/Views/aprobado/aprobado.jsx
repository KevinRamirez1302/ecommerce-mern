import { UseAuth } from '../../../context/AuthContext';
import { Wrap, WrapItem, Avatar } from '@chakra-ui/react';

export const Aprobado = () => {
  const { user } = UseAuth();

  return (
    <>
      <h1>{user.name}</h1>
    </>
  );
};
