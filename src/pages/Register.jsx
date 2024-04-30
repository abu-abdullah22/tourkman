import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'animate.css';
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const Register = () => {
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);

    const { createUser, updateUser, setUser } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const Name = e.target.name.value;
        const Photo = e.target.photo.value;

        if (password.length < 6) {
            setError('Password must be 6 characters')
            return
        } else if (!/[a-z]/.test(password)) {
            setError('Password must contain a lower letter')
            return
        } else if (!/[A-Z]/.test(password)) {
            setError('Password must contain an uppercase letter')
            return
        }

        setError('')

        //create User 
        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                updateUser(Name, Photo)
                    .then(() => {
                        toast.success('Account Created Successfully');
                        setUser({ displayName: Name, photoURL: Photo });
                    })
                    .catch(error => {
                        console.log('Registration Failed', error);
                    })
            })
            .catch(error => {
                console.log('Registration Failed', error);
            })
        e.target.email.value = '';
        e.target.name.value = '';
        e.target.password.value = '';
        e.target.photo.value = '';


    }
    return (
        <div className="bg-[url('/register.jpg')] rounded-lg my-4">
            <Helmet>Register</Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-[#EEF0F8] animate__animated animate__backInUp">
                        <form className="card-body" onSubmit={handleRegister} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name="photo" type="text" placeholder="photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="gap-2 flex items-center">
                                    <input name="password" type={show ? 'text' : "password"} placeholder="password" className="input input-bordered relative w-full" required />
                                    <span className="absolute right-10" onClick={() => setShow(!show)}>
                                        {
                                            show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                            </div>{
                                error &&
                                <small className="text-red-800">{error}</small>
                            }
                            <div className="form-control mt-6">
                                <button className="btn bg-[#E46D30] text-white hover:bg-[#5489C8]">Register</button>
                            </div>
                        </form>
                        <p className="mx-auto mb-2">Already have an account, then <Link to={'/login'} className="text-[#5489C8] hover:text-[#E46D30]">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;