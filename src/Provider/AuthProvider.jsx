import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import auth from '../Components/Firebase/Firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  // Create a new user :
  const CreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Log in user :
  const LoginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Log Out user :
  const LogOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, carruntUser => {
      console.log(carruntUser);
      setUser(carruntUser);
      setLoading(false);
    });

    return () => {
      return unSubscribe();
    };
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:7000/Jobs', { withCredentials: true })
      .then(res => {
        // console.log(res.data);
        setJobs(res.data);
      });
  }, []);

  const authInfo = {
    CreateUser,
    LoginUser,
    LogOutUser,
    User,
    jobs,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
