import { useEffect, useState } from "react";
import getAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
getAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const googleSignin = () => {
    return signInWithPopup(auth, googleProvider);
    // .then((result) => {
    //   setUser(result.user);
    // })
    // .finally(() => setLoading(false));
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubcribed;
  }, []);
  const handleRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        // ..
      });
  };
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setError("");
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    user,
    googleSignin,
    logOut,
    handleRegister,
    error,
    handleLogin,
    isLoading,
    setLoading,
  };
};
export default useFirebase;
