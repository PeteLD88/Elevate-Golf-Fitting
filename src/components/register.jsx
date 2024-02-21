import React from "react";
import Footer from "./footer";
import Nav from "./nav";

function Register() {
  return (
    <div
      id="LoadingPage"
      className="font-josefin flex flex-col min-h-screen w-full items-center"
    >
      <Nav />
      <div
        id="HERO"
        className="flex flex-col justify-center items-center w-full bg-cover bg-top py-8 px-40 relative gap-4"
      >
        <img
          src="https://i.ibb.co/xzjkN19/FUNZe-Pv-Vs-AAw-MCX.jpg"
          className="w-full h-full object-cover absolute opacity-20"
        />
        <img
          src="https://i.ibb.co/zPsLm49/e215d886-2621-46b6-b32e-9f9effc3d086-copy-2.png"
          alt="LOGO"
          className="relative w-[460px] h-[400px] mb-10"
        />
        <div className="flex flex-col pb-36">
          <form
            className="flex flex-col justify-center items-center gap-2"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" value="true" />
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className=" relative px-2 py-4 w-[850px] h-[75px] border-2 border-[#75ff52] placeholder-[#75ff52] text-2xl text-[#75ff52] bg-[#17152B] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10  mb-8 rounded-2xl"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative px-2 py-4 w-[850px] h-[75px] border-2 border-[#75ff52] placeholder-[#75ff52] bg-[#17152B] text-2xl text-[#75ff52]  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 rounded-2xl"
                placeholder="Password"
              />
            </div>

            <div>
              <button
                type="submit"
                className="relative w-[850px] h-[75px] px-2 py-4 mt-10 text-center text-2xl font-bold text-[#17152b] bg-[rgba(117,_255,_82,_0.7)] cursor-pointer transition-all ease-in-out duration-300 hover:bg-[#75ff52] rounded-2xl"
              >
                Log in
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="relative w-[850px] h-[75px] px-2 py-4 mt-10 text-center text-2xl font-bold text-[#75ff52] bg-[#17152b] cursor-pointer transition-all ease-in-out duration-300 hover:bg-[#75ff52] hover:text-[#17152b] rounded-2xl"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Register;
