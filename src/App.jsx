export default function App() {
  return (
    <div
      id="LoadingPage"
      className="font-josefin flex flex-col min-h-screen w-full items-center"
    >
      <div
        id="HEADER"
        className="bg-[rgba(52,_255,_85,_0.1)] flex flex-row justify-between w-full h-20 items-center py-4 px-4 md:px-16"
      >
        <div className="text-center text-lg md:text-4xl font-medium text-[#75ff52]">
          ELEVATE GOLF FITTING
        </div>
        <div className="flex flex-row items-center gap-4 md:gap-8">
          <div className="text-center text-xs md:text-3xl font-medium text-[#75ff52]">
            HOME
          </div>
          <div className="text-center text-xs md:text-3xl font-medium text-[#75ff52]">
            ABOUT US
          </div>
          <button
            id="Button1"
            className="text-center text-xs md:text-2xl font-medium text-[#75ff52] border border-[#75ff52] flex justify-center items-center py-2 px-4 md:py-3 md:px-6 w-full md:w-auto cursor-pointer rounded-lg transition-all ease-in-out duration-300 hover:bg-[#75ff52] hover:text-[#17152b] rounded-[35px]" 
          >
            SIGN UP NOW
          </button>
          <button
            id="Button2"
            className="text-center text-xs md:text-2xl font-medium text-[#17152b] bg-[#75ff52] flex justify-center items-center py-2 px-4 md:py-3 md:px-6 w-full md:w-auto cursor-pointer rounded-lg transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#75ff52] rounded-[35px]"
          >
            LOG IN
          </button>
        </div>
      </div>
      <div
        id="HERO"
        className="flex flex-col justify-center items-center w-full bg-cover bg-center py-40 px-40"
        style={{
          backgroundImage:
            "url('https://file.rendit.io/n/N9aDZ4YUrQ0paGPyKQfs.png')",
        }}
      >
        <div className="text-center text-3xl md:text-[90px] leading-tight text-[#75ff52] max-w-7xl">
          ELEVATE YOUR GOLF GAME
        </div>
        <div className="my-6 text-center text-3xl md:text-[80px] leading-tight text-[#75ff52] max-w-3xl">
          WITH
        </div>
        <div className="text-center text-3xl md:text-[75px] leading-tight text-[#75ff52] max-w-6xl">
          EXPERT EQUIPMENT FITTING
        </div>
        
        <button
          id="Button3"
          className="mt-20 text-center text-xl md:text-4xl font-bold text-[#17152b] bg-[rgba(117,_255,_82,_0.7)] flex justify-center items-center md:py-5 px-7 w-100 cursor-pointer rounded-xl transition-all ease-in-out duration-300 hover:bg-[#75ff52] rounded-[80px]"
        >
          GET STARTED
        </button>
      </div>
      <div id="HeroV" className="w-full px-8 py-20">
        <div className="flex flex-col md:flex-row justify-between items-stretch">
          <img
            src="https://file.rendit.io/n/XOP5eTSpskOUxwLD9K79.png"
            alt="Online Fitting"
            className="md:max-w-none"
          />
          <div className="flex flex-col justify-center text-[#75ff52] gap-y-20 max-w-xl">
            <h3 className="text-2xl md:text-6xl font-bold leading-tight">
              What is the benefit of Online Fitting?
            </h3>
            <p className="text-sm md:text-xl leading-normal bg-gradient-to-b p-4">
              With online golf fitting, you can undergo the fitting process from
              the comfort of your own home or wherever you have internet access.
              This eliminates the need for in-person appointments and travel,
              allowing you to fit your fitting session into your schedule more
              easily. Additionally, online fitting services often offer flexible
              scheduling options, making it convenient for golfers with busy
              lifestyles.
            </p>
            <div className="flex flex-row gap-4 w-full md:w-auto">
              <button
                id="PrimaryButton"
                className="shadow-lg bg-[#75ff52] flex items-center justify-center py-2 md:py-3 px-4 md:px-6 w-full md:w-auto rounded-lg text-sm md:text-base font-semibold text-[#17152b] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#75ff52] hover:border hover:border-[#75ff52] rounded-[35px]"
              >
                Get started
              </button>
              <button
                id="SecondaryButton"
                className="flex items-center justify-center py-2 md:py-3 px-4 md:px-6 w-full md:w-auto border border-[#75ff52] rounded-lg text-sm md:text-base font-semibold transition-all ease-in-out duration-300 hover:bg-[#75ff52] hover:text-[#17152b] rounded-[35px]"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="FOOTER"
        className="bg-[rgba(52,_255,_85,_0.1)] flex flex-col md:flex-row justify-between items-center w-full h-24 py-4 px-4 md:px-16"
      >
        <div className="text-center text-sm md:text-2xl text-[#75ff52] my-2 md:my-0">
          Copyright © 2024 Elevate Golf Fitting
        </div>
        <div className="flex items-center text-sm md:text-2xl text-[#75ff52] gap-1 my-2 md:my-0">
          <span>All Rights Reserved</span>
          <div>|</div>
          <a href="#" className="underline">
            Terms and Conditions
          </a>
          <div>|</div>
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}