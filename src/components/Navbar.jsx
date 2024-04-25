import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {

    const { user, logOut} = useContext(AuthContext);

    const navlink = (
        <>
            <li>
                <NavLink className="font-medium" to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink className="font-medium" to={"/all-spot"}>All Tourists Spot</NavLink>
            </li>
            <li>
                <NavLink className="font-medium" to={"/my-list"}>My List </NavLink>
            </li>
            <li>
                <NavLink className="font-medium" to={"/add-spot"}>Add Spot</NavLink>
            </li>
        </>
    )

    const handleSignOut = () => {
        logOut()
            .then(result => {
                toast.success('Logout successful')
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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navlink
                        }

                    </ul>
                </div>
                <Link to={'/'} className="btn bg-[#795D5A] text-white text-3xl hover:bg-[#80665F]">TourMan</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navlink
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {!user &&
                    <div className="space-x-5">
                        <Link to={'/register'} className="btn bg-[#E46D30] text-white hover:bg-[#5489C8]">Register</Link>
                        <Link to={'/login'} className="btn bg-[#E46D30] text-white hover:bg-[#5489C8]">Login</Link>
                    </div>
                }
               { user && <div className="flex items-center" >
                    <div className=" tooltip tooltip-left mr-3 border-2 p-1 rounded-full border-[#795D5A]" data-tip={user.displayName || 'user'}>
                        <img src={user?.photoURL || '/user.jpg'} className="w-[50px] h-[50px] rounded-full" alt="" />
                    </div>
                    <button onClick={handleSignOut} className="btn bg-[#E46D30] text-white hover:bg-[#5489C8]">Log Out </button>
                </div> }
            </div>
        </div>
    );
};

export default Navbar;