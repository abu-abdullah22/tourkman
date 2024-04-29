import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {

    const { user, logOut} = useContext(AuthContext);
    const email = user ? user.email : null;

    const [theme, setTheme] = useState("light");
    useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
  
    const handleToggle = (e) => {
      console.log(e.target.value);
      if (e.target.checked) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };

    const navlink = (
        <>
            <li>
                <NavLink className="font-medium" to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink className="font-medium" to={"/all-spot"}>All Tourists Spot</NavLink>
            </li>
            <li>
                <NavLink className="font-medium" to={`/my-list/${email}`}>My List </NavLink>
            </li>
            <li>
                <NavLink className="font-medium" to={"/add-spot"}>Add Spot</NavLink>
            </li>
        </>
    )

    const handleSignOut = () => {
        logOut()
            .then(result => {
                toast.success('Logout Successful')
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-base-100 mt-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box">
                        {
                            navlink
                        }

                    </ul>
                </div>
                <Link to={'/'} className="btn bg-[#79A79A] text-white md:text-3xl text-xl hover:bg-[#80665F] italic">TourkMan</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navlink
                    }
                </ul>
            </div>
            <div className="navbar-end">
           {
            user &&  <label className="cursor-pointer grid place-items-center mr-6" onChange={handleToggle}>
            <input
              type="checkbox"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
           }
                {!user &&
                    <div className="space-x-5">
                        <Link to={'/register'} className="btn bg-[#E46D30] text-white hover:bg-[#5489C8]">Register</Link>
                        <Link to={'/login'} className="btn bg-[#E46D30] text-white hover:bg-[#5489C8]">Login</Link>
                    </div>
                }
               { user && <div className="flex items-center" >
                    <div className=" hidden md:block tooltip tooltip-bottom mr-3 border-2 p-1 rounded-full border-[#795D5A]" data-tip={user.displayName || 'user'}>
                        <img src={user?.photoURL || '/user.jpg'} className="w-[50px] h-[50px] rounded-full" alt="" />
                    </div>
                    <button onClick={handleSignOut} className="btn bg-[#E46D30] text-white hover:bg-[#5489C8]">Log Out </button>
                </div> }
            </div>
        </div>
    );
};

export default Navbar;