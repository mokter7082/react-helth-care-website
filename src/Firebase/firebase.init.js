import { initializeApp } from "firebase/app";
import firebaseConfig from "../Firebase/firebase.config";

const getAuthentication = () => {
  return initializeApp(firebaseConfig);
};
export default getAuthentication;
