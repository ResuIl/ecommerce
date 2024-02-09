import { useState } from 'react'
import { useAuth } from "../provider/authProvider";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isValid,setIsValid] = useState(false)
    const { setToken } = useAuth();

    const login = async () => {
        if (isValid) {
            try {
                const response = await fetch('http://localhost:5000/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: mail, password: password }),
                });
                const data = await response.json();
                if (response.ok) {
                    setToken(data.user.token);
                    setError(null);
                    navigate("/", { replace: true });
                } else {
                    setError(data.error); // assuming server returns an error message
                }
            } catch (error) {
                console.error(error);
                setError('An error occurred while logging in.');
            }
        }
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 w-full h-full flex h-screen justify-center items-center">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Hello Again!</h2>
                <h2 className="text-center text-1xl leading-9 tracking-tight text-gray-900">Welcome Back</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="space-y-6">
                    <div>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="#1C274C" strokeWidth="1.5"/>
                                    <path d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </span>
                            </div>
                            <input required="True" value={mail} onChange={(e) => {  setMail(e.target.value); setIsValid(e.target.checkValidity()); }}  type="email" name="email" id="email" className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email Adress"/>
                        </div>
                    </div>

                    <div>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 25 24" fill="none">
                                <path d="M2.02759 16C2.02759 13.1716 2.02759 11.7574 2.90627 10.8787C3.78495 10 5.19916 10 8.02759 10H16.0276C18.856 10 20.2702 10 21.1489 10.8787C22.0276 11.7574 22.0276 13.1716 22.0276 16C22.0276 18.8284 22.0276 20.2426 21.1489 21.1213C20.2702 22 18.856 22 16.0276 22H8.02759C5.19916 22 3.78495 22 2.90627 21.1213C2.02759 20.2426 2.02759 18.8284 2.02759 16Z" stroke="#1C274C" strokeWidth="1.5"/>
                                <path d="M6.02759 10V8C6.02759 4.68629 8.71388 2 12.0276 2C15.3413 2 18.0276 4.68629 18.0276 8V10" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M8.02759 16H8.03659M12.0186 16H12.0276M16.0186 16H16.0276" stroke="#1C274C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            </span>
                            </div>
                            <input required="True" value={password} onChange={(e) => {  setPassword(e.target.value); setIsValid(e.target.checkValidity()); }} type="password" name="password" id="password" className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Password"/>
                        </div>
                    </div>

                    <div>
                        <button onClick={() => { login(); }} type='button' className="flex w-full justify-center bg-[#5ECE7B] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
                    </div>
                </div>

                <p className="mt-10 text-center text-sm text-[#5ECE7B]">
                    Do not have account?<span> </span>
                    <a href="/register" className="font-semibold leading-6 text-[#5ECE7B] hover:text-indigo-500 underline underline-offset-1">Register</a>
                </p>
            </div>
        </div>
    )
}

export default Login