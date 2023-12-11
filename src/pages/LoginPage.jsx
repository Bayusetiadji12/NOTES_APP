import React, { useState } from "react";
import { login } from "../utils/network";
import { Link } from "react-router-dom";

const LoginPage = ({loginSuccess}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onLogin({ username, password }) {
    const { error, data } = await login({ username, password});
    if(error) return;
    await loginSuccess ({ accessToken: data.token });
  }

  function onUsernameChangeHandler(event){
    setUsername(event.target.value);
  }

  function onPasswordChangeHandler(event){
    setPassword(event.target.value);
  }

  function onSubmitHandler(event){
    event.preventDefault();
    onLogin({username, password});
  }

  return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-amber-800">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={onSubmitHandler} >
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    value={username}
                    onChange={onUsernameChangeHandler}
                    required
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

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-amber-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Don't have an account?{' '}
              <Link to="/register">
                <span className="font-semibold leading-6 text-amber-800 hover:text-amber-700"> Register </span>
              </Link>
            </p>
          </div>
        </div>
    );
};

export default LoginPage;