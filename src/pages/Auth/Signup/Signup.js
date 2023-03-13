// import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/footer/Footer";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center h-full w-full p-4 ">
        <div className="py-6 flex flex-col justify-center items-start gap-3 w-[360px] md:w-[400px] border shadow-xl rounded-lg">
          <div className="text-center w-full mb-2 ">
            <span className=" text-4xl font-bold text-blue-800">Sign Up</span>
          </div>
          <div className="p-2 md:p-4 w-full">
            <form className="w-full">
              <div className="flex flex-col mb-3 gap-1">
                <label className="text-lg font-semibold text-[#333]">
                  Full Name
                </label>
                <input
                  value={userData.name}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  type="text"
                  className="rounded-md bg-gray-100 p-3 "
                />
              </div>
              <div className="flex flex-col mb-6 gap-1">
                <label className="text-lg font-semibold text-[#333]">
                  Email
                </label>
                <input
                  value={userData.email}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  type="email"
                  className="rounded-md bg-gray-100 p-3 "
                />
              </div>
              <div className="flex flex-col mb-6 gap-1">
                <label className="text-lg font-semibold text-[#333]">
                  Password
                </label>
                <input
                  value={userData.password}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  type="password"
                  className="rounded-md bg-gray-100 p-3 "
                />
              </div>
              <button
                disabled={loading}
                type="submit"
                className="w-full p-2 text-lg font-semibold rounded-md bg-blue-800 text-white"
              >
                {loading ? "Loading..." : "Sign up"}
              </button>
            </form>
            <div className="flex flex-row items-center gap-2 mt-3">
              <span>Already have an account?</span>
              <Link to="/login" className="text-blue-800 font-semibold">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
