import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutAction } from "../Redux/actions/user/userAction";

const Navbar = () => {
  // const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const { user } = useSelector(
    (state) => state.userDetail
  );


  // const toggleVisibility = () => {
  //   if (window.pageYOffset > window.innerHeight / 2) {
  //     setIsVisible(true);
  //   } else {
  //     setIsVisible(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", toggleVisibility);
  //   return () => window.removeEventListener("scroll", toggleVisibility);
  // }, []);

  const logoutHandler = () => {
    if(user){
      dispatch(logOutAction());

    }
  }

  return (
    <div
      className={`fixed top-0 w-full transition-opacity duration-500 z-10 bg-transparent text-white shadow-lg`}
    >
      {/* Add your navbar content here */}
      <div className="mx-auto p-4 flex justify-between">
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/near">Near By</Link>
          <Link to="/upload">Try Now</Link>
        </div>
        <div>
          {user ?<>
            <p>{user.name}</p>
            <button onClick={logoutHandler}>Logout</button>
          </>  : <Link to="/login">Login/Sign up</Link>}
          
        </div>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default Navbar;
