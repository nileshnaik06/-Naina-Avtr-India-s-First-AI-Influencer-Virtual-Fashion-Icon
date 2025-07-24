import axios from "../Utils/axios";
import { createContext, useEffect, useState, Suspense, lazy } from "react";
import ShimmerLoader from "./ShimmerLoader";

// Lazy load children if they're heavy

export const Usercontext = createContext(null);

const Wrapper = (props) => {
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setuserData(JSON.parse(storedUser));
    }

    const getUser = async () => {
      try {
        if (userData?.user) {
          const response = await axios.get("/user", {
            params: userData.user,
          });
          setuserData(response.data);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    getUser();
  }, [userData?.user]);

  return (
    <Usercontext.Provider value={[userData, setuserData]}>
      <Suspense fallback={<ShimmerLoader />}>
        {/* If children include big parts, lazy load them */}
        {props.children}
      </Suspense>
    </Usercontext.Provider>
  );
};

export default Wrapper;
