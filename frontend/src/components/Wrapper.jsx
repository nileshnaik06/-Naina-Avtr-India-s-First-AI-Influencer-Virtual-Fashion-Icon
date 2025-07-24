import axios from "../Utils/axios";
import { createContext, useEffect, useState } from "react";

export const Usercontext = createContext(null);

const Wrapper = (props) => {
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setuserData(JSON.parse(storedUser)); // auto set context if user data exists
    }

    const getUser = async () => {
      const respose = await axios.get("/user", {
        params: userData.user,
      });
      setuserData(respose);
    };

    return () => {
      getUser();
    };
  }, []);

  return (
    <Usercontext.Provider value={[userData, setuserData]}>
      {props.children}
    </Usercontext.Provider>
  );
};

export default Wrapper;
