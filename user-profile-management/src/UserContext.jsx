import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'A passionate developer who loves React.',
    location: 'New York, USA'
  });

  const updateUser = (updatedUser) => {
    setUser((prevUser) => ({
      ...prevUser,       
      ...updatedUser,     
    }));
  };
  

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
