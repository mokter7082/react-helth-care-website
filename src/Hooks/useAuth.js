import { useContext } from "react";
import { AuthContext } from "../Context/AurhProvider";

const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;
