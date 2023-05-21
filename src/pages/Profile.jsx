import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="">
      <div>
        <h4>{user?.name} {user?.last_name}</h4>
        <h1>Producto</h1>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Profile;
