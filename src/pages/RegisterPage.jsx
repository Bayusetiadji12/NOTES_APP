import React, { useState } from "react";
import { register } from "../utils/network";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onUsernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    try {
      const { error } = await register({ username, password });
      if (error) {
        setErrorMessage("Registration failed. Please try again.");
      } else {
        console.log("Registration successful!");
        navigate("/")
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred.");
    }
  };

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-amber-800">
              Register Account
            </h2>
          </div>
          
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={onSubmitHandler}>
                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Username
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            type="text"
                            required
                            value={username}
                            onChange={onUsernameChangeHandler}
                            className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-slate-600 rounded-lg"
                        />
                    </div>
                </div>  
                <div>
                    <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                </div>
                
                <div className="mt-2">
                  <input
                    type="password"
                    value={password}
                    onChange={onPasswordChangeHandler}
                    required
                    className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border border-slate-600 rounded-lg"
                  />
                </div>
              </div>
              {errorMessage && <p className="text-red-600">{errorMessage}</p>}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-amber-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800"
                >
                  Register
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <Link to="/">
                <span className="font-semibold leading-6 text-amber-800 hover:text-amber-700"> Sign In </span>
              </Link>
            </p>
          </div>
        </div>
    );
};

export default RegisterPage;