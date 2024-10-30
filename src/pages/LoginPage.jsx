import React, { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { useHome } from "../providers/HomeProvider";

const LoginPage = () => {
  const { darkMode } = useHome();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleForm = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setTimeout(() => {
        setIsAnimating(false);
      }, 200);
    }, 200);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen flex flex-col md:flex-row dark:bg-gray-900">
        {/* Left side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:bg-none md:bg-[url('src/assets/login-illustration.jpg')] bg-cover bg-center">
          <div
            className={`w-full dark:border rounded-lg bg-white shadow p-10 max-w-md space-y-8 dark:bg-gray-800 transition-all duration-400 ease-in-out transform
          ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
          >
            {/* Header */}
            <div className="">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-all duration-300">
                {isLogin ? "Login" : "Create an account"}
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-50 transition-all duration-300">
                {isLogin ? "Welcome back!" : "Be a member of our community"}
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4 md:space-y-6">
              <div className="space-y-3 transition-all duration-300">
                {!isLogin && (
                  <div className="transition-all duration-300">
                    <label className="block text-sm font-medium text-gray-700 dark:text-white">
                      Full name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                             focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                             transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                )}

                <div className="transition-all duration-300">
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                           focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                           transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="example@email.com"
                  />
                </div>

                <div className="transition-all duration-300">
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                             focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                             transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center transition-all duration-300"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {!isLogin && (
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-indigo-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-end transition-all duration-300">
                  <button
                    type="button"
                    className="text-sm text-indigo-600 hover:text-indigo-500 
                           transform hover:translate-x-1 transition-all duration-300"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent 
                       rounded-md shadow-sm font-medium text-white bg-indigo-600 
                       hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                       focus:ring-indigo-500 transform hover:scale-[1.02] active:scale-[0.98]
                       transition-all duration-300"
              >
                {isLogin ? "Login" : "Create an account"}
              </button>

              <div className="flex items-center justify-center space-x-2">
                <div className="w-1/3 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
                <p className="text-gray-400 dark:text-gray-500">or</p>
                <div className="w-1/3 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
            </div>

              <button type="button" className="w-full text-center font-medium py-2 border flex items-center justify-center border-indigo-200 rounded-lg text-gray-700 hover:border-indigo-500 hover:text-gray-900 hover:shadow transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5 mr-2" alt="Google Icon" />
                <span className="dark:text-gray-300">{isLogin? 'Login' : 'Sign up'} with Google</span>
            </button>

            

              <div className="text-center">
                <button
                  type="button"
                  onClick={toggleForm}
                  className="text-sm text-indigo-600 hover:text-indigo-500 
                         transform hover:translate-y-[-2px] transition-all duration-300"
                >

                  {isLogin
                    ? "Don't have an account? Register here"
                    : "Have an account? Login now"}
                </button>
                
              </div>
            </form>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hidden lg:block w-full md:w-1/2 transition-all duration-500 max-h-screen">
          <img
            src="src\assets\login-illustration.jpg"
            alt="Login illustration"
            className="w-full h-full object-cover transition-all duration-500 rounded-l-[50px]"          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
