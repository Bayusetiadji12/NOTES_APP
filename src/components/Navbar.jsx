import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ authUser, logout }) => {
  return (

    <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Note APP</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {authUser && (
            <Link onClick={logout}>
              <span className=" text-base font-semibold leading-7 text-gray-900 hover:text-red-600">Log Out</span>
            </Link>
          )}
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
