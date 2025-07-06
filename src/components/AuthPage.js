import React, { useState } from "react";

const AuthPage = () => {
  const [isLogin, setLogin] = useState(true);
  const [role, setRole] = useState("user"); // Default role is user for signup
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [qualification, setQualification] = useState("");
  const [studies, setStudies] = useState("");
  const [isDiabetic, setIsDiabetic] = useState(false);
  const [location, setLocation] = useState("");

  const switchForm = () => {
    setLogin(!isLogin);
  };

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleSignUp = () => {
    // Add your logic to handle the signup data
    // This is a basic example, you should implement proper validation and API calls here

    console.log({
      name,
      email,
      password,
      role,
      qualification,
      studies,
      isDiabetic,
      location,
    });
  };

  return (
    <div className="flex items-center justify-center h-screen mt-11">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl z-10 text-black font-bold mb-4">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Role
              </label>
              <div className="flex items-center">
                <button
                  className={`${
                    role === "user"
                      ? "bg-blue-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  } text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline`}
                  type="button"
                  onClick={() => handleRoleChange("user")}
                >
                  User
                </button>
                <button
                  className={`${
                    role === "doctor"
                      ? "bg-green-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                  type="button"
                  onClick={() => handleRoleChange("doctor")}
                >
                  Doctor
                </button>
              </div>
            </div>
          )}

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {!isLogin && (
            <>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              {role === "doctor" && (
                <>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="qualification"
                    >
                      Qualification
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="qualification"
                      type="text"
                      placeholder="Qualification"
                      value={qualification}
                      onChange={(e) => setQualification(e.target.value)}
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="studies"
                    >
                      Studies
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="studies"
                      type="text"
                      placeholder="Studies"
                      value={studies}
                      onChange={(e) => setStudies(e.target.value)}
                    />
                  </div>
                </>
              )}

              {role === "user" && (
                <div className="mb-4 ">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Are you Diabetic?
                  </label>
                  <div className="flex items-center">
                    <input
                      className="mr-2 leading-tight"
                      type="checkbox"
                      id="diabeticCheckbox"
                      checked={isDiabetic}
                      onChange={() => setIsDiabetic(!isDiabetic)}
                    />
                    <label htmlFor="diabeticCheckbox">Yes, I am Diabetic</label>
                  </div>
                </div>
              )}

























































              

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  Location
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="location"
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </>
          )}

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={switchForm}
            >
              {isLogin ? "Switch to Sign Up" : "Switch to Login"}
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSignUp}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
