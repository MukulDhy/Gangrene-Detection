import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  registerNewUser,
  userloginAction,
} from "../../Redux/actions/user/userAction";
const LogSign = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("user"); // Default role is user for signup
  const [qualification, setQualification] = useState("");
  const [studies, setStudies] = useState("");
  const [isDiabetic, setIsDiabetic] = useState(false);
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const { error, user } = useSelector((state) => state.userDetail);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const submitHandler = () => {
    console.log(isLogin);

    if (isLogin) {
      dispatch(userloginAction(loginEmail, loginPassword));
      return;
    }
    if(role === "user"){
      dispatch(registerNewUser({ email, password, name,role : "user" }));
      return;
    }
    // dispatch(registerNewDoctor({ email, password, name }));

  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="p-6 max-w-sm w-full bg-white rounded shadow-md">
          <h2 className="text-lg font-semibold text-center mb-4 text-black">
            {isLogin ? "Login" : "Sign Up"} Form
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
          {confirmPassword !== password && !isLogin && (
            <h2 className="text-lg font-semibold text-center mb-4 text-red-600">
              Password is not matched with Confirm Password
            </h2>
          )}
          {error && (
            <h2 className="text-lg font-semibold text-center mb-4 text-red-600">
              {error}
            </h2>
          )}

          <form>
            <div className="mb-4">
              {isLogin ? null : (
                <>
                  <div className="flex gap-4">
                    <div>
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="Name"
                      >
                        Name
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="Name"
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div>
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
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
            {isLogin && (
              <>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-4"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setloginEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 mt-3 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none mb-3 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="*******"
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
              </>
            )}
            {!isLogin && (
              <>
                <div className="flex gap-3">
                  <div className="mb-1">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="*********"
                    />
                  </div>
                  {isLogin ? null : (
                    <div className="mb-2">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="confirm-password"
                      >
                        Confirm Password
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="confirm-password"
                        type="password"
                        placeholder="*********"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                  )}
                </div>
              </>
            )}
            {role === "doctor" && !isLogin && (
              <>
                <div className="mb-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-1"
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
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="location"
                  >
                    Location
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="locations"
                    type="text"
                    placeholder="Location.."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
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

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={toggleForm}
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
              <button
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                type="button"
                onClick={submitHandler}
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogSign;
