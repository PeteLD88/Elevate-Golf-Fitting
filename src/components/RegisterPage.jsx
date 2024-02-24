import Footer from "./Footer";
import NavLog from "./NavLog";

export default function RegisterPage() {
  return (
    <div
      id="LoadingPage"
      className="font-josefin flex flex-col min-h-screen w-full items-center"
    >
      <NavLog />
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
          className="relative w-[460px] h-[400px] mt-10"
        />
        <h1 className="relative text-6xl py-10 text-[#75ff52]">Create New Account</h1>
        <div className="flex flex-col pb-36">
          <form
            className="flex flex-col justify-center items-center gap-12"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" value="true" />
            <div>
              <label htmlFor="username" className="sr-only">
                User name
              </label>
              <input
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                required
                className="relative px-5 py-4 w-[850px] h-[75px] border-2 border-[#75ff52] placeholder-[#75ff52] bg-[#17152B] text-2xl text-[#75ff52]  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 rounded-2xl"
                placeholder="Username"
              />
            </div>  
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
                className=" relative px-5 py-4 w-[850px] h-[75px] border-2 border-[#75ff52] placeholder-[#75ff52] text-2xl text-[#75ff52] bg-[#17152B] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 rounded-2xl"
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
                className="relative px-5 py-4 w-[850px] h-[75px] border-2 border-[#75ff52] placeholder-[#75ff52] bg-[#17152B] text-2xl text-[#75ff52]  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 rounded-2xl"
                placeholder="Password"
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="confirm-password"
                required
                className="relative px-5 py-4 w-[850px] h-[75px] border-2 border-[#75ff52] placeholder-[#75ff52] bg-[#17152B] text-2xl text-[#75ff52]  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 rounded-2xl"
                placeholder="Confirm Password"
              />
            </div>  

            <div>
              <button
                type="submit"
                className="relative w-[850px] h-[75px] px-2 py-4text-center text-2xl font-bold text-[#17152b] bg-[rgba(117,_255,_82,_0.7)] cursor-pointer transition-all ease-in-out duration-300 hover:bg-[#75ff52] rounded-2xl"
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