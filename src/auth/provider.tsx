import React, { ReactNode, useState } from 'react';

import { AuthContext } from './context';

const defaultUser = {
  bio: "i'm king",
  location: 'ile-ife',
  pfp: 'https://avatars.githubusercontent.com/u/14913673?v=4',
  pronouns: 'He/Him',
  username: 'harkindey',
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(defaultUser);

  return (
    <AuthContext.Provider
      value={{
        isAuth: !!user,
        setUser,
        user,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
