import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import 'animate.css';

const Login = () => {
    const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const hanldeLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        //log in
        signIn(email, password)
            .then(result => {
                if (result.user) {
                    toast.success('Login successful');
                    navigate(location?.state || '/');
                }
            })
            .catch(error => {
                if (error.code) {
                    toast.error('Wrong Password')
                } else {
                    toast.error('Error loggin in')
                }
            })

    }

    const handleGoogle = () => {
        googleLogin()
            .then(result => {

                if (result.user) {
                    toast.success('Login Successful');
                    navigate(location?.state || '/');
                }
            })
            .catch(error => {
                console.log(error);
                toast.error('Error loggin in')
            })
    }

    const handleGithub = () => {
        githubLogin()
            .then(result => {
                if (result.user) {
                    toast.success('Login Successful')
                    navigate(location?.state || '/');
                }
            })
            .catch(error => {
                console.log(error);
                toast.error('Error loggin in');
            })
    }
    return (
        <div className="bg-[url('/public/login.jpg')] bg-cover bg-center rounded-lg my-4">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100  animate__animated animate__backInDown bg-[#EEF0F8]">
                        <form className="card-body" onSubmit={hanldeLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="gap-2 flex items-center">
                                    <input name="password" type={show ? 'text' : "password"} placeholder="password" className="input input-bordered relative" required />
                                    <span className="absolute right-10" onClick={() => setShow(!show)}>
                                        {
                                            show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#E46D30] text-white hover:bg-[#5489C8]">Login</button>
                            </div>
                        </form>
                        <p className="mx-auto mb-2">New Here? Go to, <Link to={'/register'} className="text-[#5489C8] hover:text-[#E46D30]">Register</Link></p>
                        <div>
                            <p className="divider">Continue with</p>
                            <div className="m-5 flex justify-between">
                                <button onClick={handleGoogle} className="btn bg-[#8E8A46] text-white hover:bg-[#475D66]"><FaGoogle />Google</button>
                                <button onClick={handleGithub} className="btn bg-[#2D2E24] text-white hover:bg-[#236067]"><FaGithub />Github</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Login;