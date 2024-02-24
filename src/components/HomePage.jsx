import Footer from "./Footer";
import Nav from "./Nav";

export default function HomePage() {
  return (
    <div
      id="LoadingPage"
      className="font-josefin flex flex-col min-h-screen w-full items-center"
    >
      <Nav />
      <div
        id="HERO"
        className="flex flex-col justify-center items-center w-full bg-cover bg-center py-40 px-40 relative"
      >
        <img src='https://i.ibb.co/Hg9S3zd/20130930-club-fitting-golf-learning-center-craig-allan-0061-Retouch.jpg'
        className="w-full h-full object-cover absolute opacity-30"/>
        <div className="text-center text-3xl md:text-[90px] leading-tight text-[#75ff52] max-w-7xl relative">
          ELEVATE YOUR GOLF GAME
        </div>
        <div className="my-6 text-center text-3xl md:text-[80px] leading-tight text-[#75ff52] max-w-3xl relative">
          WITH
        </div>
        <div className="text-center text-3xl md:text-[75px] leading-tight text-[#75ff52] max-w-6xl relative">
          EXPERT EQUIPMENT FITTING
        </div>

        <button
          id="Button3"
          className="relative mt-20 text-center text-xl md:text-5 xl font-bold text-[#17152b] bg-[rgba(117,_255,_82,_0.7)] border-2 border-[#75ff52] flex justify-center items-center md:py-5 px-7 w-100 cursor-pointer transition-all ease-in-out duration-300 hover:bg-[#75ff52] rounded-full"
        >
          GET STARTED
        </button>
      </div>
      <div id="HeroV" className="w-full px-8 py-20 bg-cover bg-center" style={{backgroundImage: "url(https://i.ibb.co/KDyQX8n/Homebg2.png)"}}>
        <div className="flex flex-col md:flex-row justify-around">
          <img
            className="relative w-[1184px] h-[667px]"
            src="https://file.rendit.io/n/XOP5eTSpskOUxwLD9K79.png"
          />
          <div className="w-[600px] flex flex-col justify-center text-[#75ff52]">
            <h1 className="text-7xl font-extrabold leading-tight">
              What is the
            </h1>
            <h1 className="text-7xl font-extrabold leading-tight">
              benefit of
            </h1><h1 className="mb-10 text-7xl md:text-6xl font-extrabold leading-tight">
              Online Fitting?
            </h1>
            <p className="mb-8 md:text-2xl leading-normal bg-gradient-to-b p-4">
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
                className="bg-[#75ff52] border border-[#75ff52] flex items-center justify-center py-2 md:py-3 px-4 md:px-6 w-full md:w-auto text-sm md:text-base font-semibold text-[#17152b] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#75ff52] hover:border hover:border-[#75ff52] rounded-full"
              >
                Get started
              </button>
              <button
                id="SecondaryButton"
                className="flex items-center justify-center py-2 md:py-3 px-4 md:px-6 w-full md:w-auto border border-[#75ff52] text-sm md:text-base font-semibold transition-all ease-in-out duration-300 hover:bg-[#75ff52] hover:text-[#17152b] rounded-full"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}