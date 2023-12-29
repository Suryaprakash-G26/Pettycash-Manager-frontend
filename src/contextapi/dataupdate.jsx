/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AppCtx = createContext(null);
const AppContext = ({ children }) => {
  const [info, setinfo] = useState([]);
  const [message, setmessage] = useState("");
  const [data, setdata] = useState("");
  const [success, setsuccess] = useState("");
  const [loading, setloading] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [editable, setEditable] = useState(null);
  const [index, setIndex] = useState(null);

  return (
    <AppCtx.Provider
      value={{
        info,
        setinfo,
        message,
        setmessage,
        data,
        setdata,
        loading,
        setloading,
        showTable,
        setShowTable,
        success,
        setsuccess,
        editable,
        setEditable,
        index,
        setIndex,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};

export const AppState = () => {
  return useContext(AppCtx);
};
export default AppContext;
