import { createContext, useState } from "react";

export const UserData = createContext("");

function UserDetails({ children }) {
  const [userDetails, setUserDetails] = useState({});
  return (
    <UserData.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserData.Provider>
  );
}

export default UserDetails;
