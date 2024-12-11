import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
const url = "https://masjid-life-studentportal-backend.onrender.com/api/v1/users/login";

const MyLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/verifyUser";
  const handleLogin = async (event) => {
    event.preventDefault();

    const loginUser = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const response = await axios.post(url, loginUser);

      const token = response?.data?.data.accessToken;
      Cookies.set("accessToken", token);
      const expirationTime = new Date().getTime() + 180 * 60 * 1000;
      const tokenData = { token, expirationTime };

      if (token) {
        localStorage.setItem("authToken", JSON.stringify(tokenData));
        toast.success(response?.data?.data?.message);
        navigate(from, { replace: true });
      }

      // Cookies.set('token', response?.data?.token , { expires: 7, secure: true});
      //clear state and controlled inputs
      event.target.reset();
    } catch (err) {
     
      if (!err?.response) {
        toast.error("No Server Response");
      } else if (err.response?.status === 409) {
        toast.error("Username Taken");
      } else {
        toast.error(err?.response?.data?.error);
      }
    }
  };
  
  return (
    <section class="bg-blueGray-50">
      <div class="w-full lg:w-4/12  mx-auto lg:pt-8">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
          <div class="rounded-t mb-0 px-6 py-6 pb-0">
            <div class="text-center mb-1 grid grid-cols-2 w-full mx-auto">
              <div className="text-center mt-1">
              <h6 class="text-center text-blueGray-500 text-3xl font-bold ">LogIn</h6>
              <p class="text-blueGray-500 text-base font-semibold pt-4">Masjid.Life Education Portal</p>
              <p class="text-blueGray-500 text-lg font-semibold pt-1">100% Interest Free Loans</p>
              </div>
              <img
                      src="https://i.ibb.co.com/qnbtHc5/masjid-life-logo.jpg"
                      class="h-32  w-32 m-auto "
                      alt="Windster Logo"
                    />
                    {/* <span class="self-center whitespace-nowrap">PU MIS</span> */}
            </div>
                    
            {/* <SocileLogin></SocileLogin> */}
            <div class="divider">With</div>
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleLogin} className="pb-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <label class="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span class="ml-2 text-sm font-semibold text-blueGray-600">
                      Remember me
                    </span>
                  </label>
                </div>
                <a class="link text-sm text-blue-700 hover:underline cursor-pointer">
                  Forgot password?
                </a>
              </div>
              <div class="text-center mt-6">
                <button
                  type="submit"
                  class="btn text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                >
                  {" "}
                  Log In{" "}
                </button>
              </div>
            </form>
            <span class="ml-2">
              You don't have an account? Please Contact 
              <h1 to="#" class="text-base ml-2 ">
                 Kamal Ahmed - Founder<br/> <span className="text-blue-400">masjid.life.kamal@gmail.com</span> <br/>+19193608286 (WhatsApp)
              </h1>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyLogin;
