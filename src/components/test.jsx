import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

function Test() {
  return (
    <div
      id="LoadingPage"
      className="font-josefin flex flex-col min-h-screen w-full items-center"
    >
      <Nav />
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <form className="mt-8 space-y-6" action="#" method="POST">
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
                  className="appearance-none relative block w-full px-3 py-2 border-2 border-[#75ff52] placeholder-[#75ff52]  text-[#75ff52] bg-[#17152B] rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-20 rounded-lg"
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
                  className="appearance-none relative block w-full px-3 py-2 border-2 border-[#75ff52] placeholder-[#75ff52] bg-[#17152B] text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-lg"
                  placeholder="Password"
                />
              </div>

            <div>
              <button
                type="submit"
                className="relative mt-20 text-center text-xl md:text-5 xl font-bold text-[#17152b] bg-[rgba(117,_255,_82,_0.7)] flex justify-center items-center md:py-3 px-40 w-100 cursor-pointer transition-all ease-in-out duration-300 hover:bg-[#75ff52] rounded-lg"
              >
                Log in
              </button>
            </div>
          </form>
      </div>
      <Footer />
    </div>
  );
}

export default Test;
