"use client";

import { AuthContext } from "@/contexts/authContext";
import Link from "next/link";
import { useContext } from "react";
import { deleteCookie } from "cookies-next";
import Image from "next/image";

export default function NavBar() {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        deleteCookie("authUser");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/Products/allProducts">All Products</Link>
      </li>
      <li>
        <Link href="/addProduct">Add Product</Link>
      </li>
      {user && (
        <>
          <li>
            <Link href="/manageProducts">Manage Products</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link href="/">
          <button
            className="text-2xl font-bold  bg-gradient-to-r from-[#03373D] to-[#06745b] 
    bg-clip-text text-transparent"
          >
            <Image
              src="/Logo.jpg"
              alt="User Avatar"
              width={55}
              height={55}
              className=""
            />
          </button>
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* USER SECTION */}
      <div className="navbar-end mr-4">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-green-500">
                <Image
                  src={
                    user.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                  alt="User Avatar"
                  width={40}
                  height={40}
                />
              </div>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 p-2 shadow"
            >
              <li className="text-gray-700 font-semibold px-2 text-center">
                {user.displayName}
              </li>
              <li className="text-gray-700 font-semibold px-2 text-center">
                {user.email}
              </li>
              <li>
                <Link href="/">Profile</Link>
              </li>
              <li>
                <Link href="/">Settings</Link>
              </li>
              <li>
                <button onClick={handleSignOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link href="/Auth/login">
              <button className="btn btn-success">Login</button>
            </Link>
            <Link href="/Auth/register">
              <button className="btn ml-2">Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
