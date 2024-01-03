import axios from 'axios';
import { useEffect } from 'react';
import { UseAuth } from '../../context/AuthContext';
import { Wrap, WrapItem, Avatar } from '@chakra-ui/react';

export const Profile = () => {
  const { user } = UseAuth();
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Wrap>
          <WrapItem>
            <Avatar
              size="xl"
              name="Dan Abrahmov"
              src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
            />
          </WrapItem>
        </Wrap>
        <h1>Welcome {user.name}</h1>
      </div>
    </>
  );
};
