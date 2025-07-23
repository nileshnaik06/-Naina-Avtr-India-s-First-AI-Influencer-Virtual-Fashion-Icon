import { createContext, useState } from "react";

export const Usercontext = createContext(null);

const Wrapper = (props) => {
  const [userData, setuserData] = useState([]);

  return (
    <Usercontext.Provider value={[userData, setuserData]}>
      {props.children}
    </Usercontext.Provider>
  );
};

export default Wrapper;
