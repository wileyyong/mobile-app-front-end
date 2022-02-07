import React, { ReactNode, useState } from 'react';

import { AuthContext } from './context';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        isAuth: !!user,
        setUser,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
