import { useState, useEffect } from 'react';

export const useFetchUsers = url => {
  const [users, setUsers] = useState(null);
  const [usersInfo, setUsersInfo] = useState(null);

  const getUsers = async url => {
    try {
      const data = await fetch(url);
      const response = await data.json();
      setUsers(response.results);
      setUsersInfo(response.info);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getUsers(url);
  }, []);

  return [users, usersInfo];
};
