import React, { useEffect, useState } from "react";
import { useHome } from "../providers/HomeProvider";
import { useAuth } from "@/providers/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { darkMode } = useHome();
  const { login, isAuthenticated } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {    
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);


  // Form states
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    acceptTerms: false,
  });

  // Error states
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    acceptTerms: "",
    submitError: "",
  });

  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const validateForm = () => {
    let tempErrors = {
      fullName: "",
      email: "",
      password: "",
      acceptTerms: "",
      submitError: "",
    };
    let isValid = true;

    if (!isLogin && !formData.fullName.trim()) {
      tempErrors.fullName = "Full name is required";
      isValid = false;
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      tempErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!isLogin && !formData.acceptTerms) {
      tempErrors.acceptTerms = "You must accept the terms and conditions";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
        submitError: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      if (isLogin) {
        // Login logic
        const { email, password } = formData;
        const response = await login(email, password);
        if (response.success) {
          navigate("/")
        } else {
          throw new Error(data.message || "Login failed");
        }
      } else {
        // Register logic
        const response = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await response.json();
        if (!response.ok)
          throw new Error(data.message || "Registration failed");

        // Handle successful registration
        console.log("Registration successful:", data);
        // You can automatically login user or redirect to login page
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        submitError: error.message || "An error occurred. Please try again.",
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const toggleForm = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      // Reset form data and errors when switching forms
      setFormData({
        fullName: "",
        email: "",
        password: "",
        acceptTerms: false,
      });
      setErrors({
        fullName: "",
        email: "",
        password: "",
        acceptTerms: "",
        submitError: "",
      });
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

            {/* Error message */}
            {errors.submitError && (
              <div className="p-3 text-sm text-red-500 bg-red-100 rounded-md">
                {errors.submitError}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="space-y-3 transition-all duration-300">
                {!isLogin && (
                  <div className="transition-all duration-300">
                    <label className="block text-sm font-medium text-gray-700 dark:text-white">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm 
                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                        transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                        dark:focus:border-blue-500 ${
                          errors.fullName ? "border-red-500" : "border-gray-300"
                        }`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                )}

                <div className="transition-all duration-300">
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm 
                      focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                      transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                      dark:focus:border-blue-500 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    placeholder="example@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="transition-all duration-300">
                  <label className="block text-sm font-medium text-gray-700 dark:text-white">
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <input
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`block w-full px-3 py-2 border rounded-md shadow-sm 
                        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                        transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                        dark:focus:border-blue-500 ${
                          errors.password ? "border-red-500" : "border-gray-300"
                        }`}
                      placeholder="••••••••"
                    />
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>

              {!isLogin && (
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="acceptTerms"
                      name="acceptTerms"
                      type="checkbox"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="acceptTerms"
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
                    {errors.acceptTerms && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.acceptTerms}
                      </p>
                    )}
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
                disabled={isLoading}
                className={`w-full flex justify-center items-center px-4 py-2 border border-transparent 
                  rounded-md shadow-sm font-medium text-white bg-indigo-600 
                  ${
                    !isLoading
                      ? "hover:bg-indigo-700"
                      : "opacity-70 cursor-not-allowed"
                  }
                  focus:outline-none focus:ring-2 focus:ring-offset-2 
                  focus:ring-indigo-500 transform hover:scale-[1.02] active:scale-[0.98]
                  transition-all duration-300`}
              >
                {isLoading ? (
                  <span className="inline-flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : isLogin ? (
                  "Login"
                ) : (
                  "Create an account"
                )}
              </button>

              <div className="flex items-center justify-center space-x-2">
                <div className="w-1/3 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
                <p className="text-gray-400 dark:text-gray-500">or</p>
                <div className="w-1/3 h-0.5 bg-gray-300 dark:bg-gray-700"></div>
              </div>

              <button
                type="button"
                className="w-full text-center font-medium py-2 border flex items-center justify-center border-indigo-200 rounded-lg text-gray-700 hover:border-indigo-500 hover:text-gray-900 hover:shadow transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  className="w-5 h-5 mr-2"
                  alt="Google Icon"
                />
                <span className="dark:text-gray-300">
                  {isLogin ? "Login" : "Sign up"} with Google
                </span>
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
            className="w-full h-full object-cover transition-all duration-500 rounded-l-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
