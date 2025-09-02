import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { clearCart } from "../redux/cartSlice";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // clear both auth and cart
    dispatch(logout());
    dispatch(clearCart());

    const timer = setTimeout(() => {
      navigate("/"); // redirect to Home
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate, dispatch]);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 bg-white">
      <p className="text-2xl font-bold text-gray-800 text-center">
        You’ve been logged out
      </p>
      <p className="text-md text-gray-600 text-center">
        Redirecting you to the{" "}
        <span className="text-[#00BFFF] font-medium">Home Page</span>...
      </p>
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#00BFFF]"></div>
    </div>
  );
}

export default Logout;
