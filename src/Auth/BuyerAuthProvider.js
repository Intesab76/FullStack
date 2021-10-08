import React, { useContext, useState, useEffect } from "react";
import { auth } from "../Auth/firebase";
const AuthContext = React.createContext();

export function BuyerAuth() {
  return useContext(AuthContext);
}

export function BuyerAuthProvider({ children }) {
  const [currentBuyer, setCurrentBuyer] = useState("");

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((buyer) => {
      setCurrentBuyer(buyer);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentBuyer,
    login,
    signUp,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
