import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase";
import Loading from "./Loading.js";



export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

 useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    setUser(user);    
    setLoading(false)
  });
}, []);
if (loading) {
  return <Loading />;
}

return (
    <AuthContext.Provider value={{ user }}>    
      {children}
    </AuthContext.Provider>
  );
}
