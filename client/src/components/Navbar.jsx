import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "../context/UserContext";

function Navbar() {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const { userDetails, setUserDetails } = useContext(UserData);
  useEffect(() => {
    setUserDetails(userInfo);
  }, []);
  const doLogout = () => {
    setUserDetails({});
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="shadow-md w-full fixed top-0 left-0 ">
      <div className="md:flex bg-gray-200 items-center justify-between  py-3 md:px-14  px-7">
        <div
          onClick={() => navigate("/")}
          className="font-bold text-2xl cursor-pointer flex items-center font-[poppins]
          text-black"
        >
          DropBox
        </div>
        <div className="md:flex md:items-center text-black">
          {userDetails && (
            <>
              <h3>
                Welcome <br />
                {userDetails?.user?.name}
              </h3>
              <button
                onClick={doLogout}
                className="bg-indigo-400
                duration-500  text-white font-[poppins] py-2 px-6 rounded md:ml-8 hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
