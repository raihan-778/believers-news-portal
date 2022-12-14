import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import Spinner from "../../Spinner/Spinner";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //google signup
  const googleSignUp = (provider) => {
    setLoading(true);

    return signInWithPopup(auth, provider);
  };

  //log in with email and password
  const userLogIn = (email, password) => {
    setLoading(true);
    <Spinner></Spinner>;
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign up with email and password
  const userSignUp = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };
  //log out
  const userSignOut = () => {
    setLoading(true);

    return signOut(auth);
  };

  //update user porfiles
  const updateUserProfiles = (userProfile) => {
    return updateProfile(auth.currentUser, userProfile);
  };
  const userEmailVerify = () => {
    return sendEmailVerification(auth.currentUser);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.uid) {
        console.log(currentUser);
        if (currentUser === null || currentUser.emailVerified) {
          setUser(currentUser);
        }

        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    googleSignUp,
    userLogIn,
    userSignUp,
    userSignOut,
    updateUserProfiles,
    userEmailVerify,
    setLoading,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
