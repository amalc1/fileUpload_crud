import React from "react";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();
  const menus = [
    { name: "All Files", link: "/home/files" },
    { name: "Photos", link: "/home/photos" },
  ];
  return (
    <>
      <div className=" md:col-start-1 md:col-end-3 md:block h-screen mt-16 bg-stone-200 w-60 flex flex-col">
        <div className=" text-black mt-4">
          {menus.map((menu, index) => (
            <div
              key={index}
              onClick={() => navigate(`${menu.link}`)}
              className="cursor-pointer mb-4 border-white hover:bg-stone-100 h-12 grid  justify-items-center place-items-center"
            >
              <button>{menu.name}</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideNav;
