import Link from "next/link";

export default function NavBar() {
  const links = (
    <>
      <li>
        <Link href="/">All Products</Link>
      </li>
      <li>
        <Link href="/">All</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href="/">
            <button className="text-2xl font-bold">KhalidS DreamS</button>
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link href="/Auth/login">
            <button className="btn btn-success">Login</button>
          </Link>
          <Link href="/Auth/register">
            <button className="btn ">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
