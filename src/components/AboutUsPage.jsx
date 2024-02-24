import Footer from "./Footer";
import Nav from "./Nav";

export default function AboutUsPage() {
  return (
    <div
      id="AboutUsPage"
      className="font-josefin flex flex-col min-h-screen w-full items-center"
    >
      <Nav />
      <main className="bg-cover bg-center" style={{backgroundImage: "url(https://i.ibb.co/NxKq5MG/Screenshot-2024-02-25-022406.png)"}}>
        <div className="max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-2">
            <div>
              <img
                src="https://file.rendit.io/n/NNXG74SySO27LKpDnxjX.png"
                className="w-[820px] pt-16 rounded-l relative"
              />
              <img
                src="https://file.rendit.io/n/E8w6NOkS4DOVCSlIWmok.png"
                className="w-[820px] rounded-l my-10 relative"
              />
            </div>
            <div>
              <h2 className="pt-16 relative text-8xl font-bold mb-20 text-[#75ff52]">
                Who are we?
              </h2>
              <p className="relative text-4xl py- mr-24 text-[#75ff52]">
                At Elevate Golf Fitting, we understand the importance of having
                properly fitted golf equipment to enhance your game. Our team of
                experienced golf professionals is dedicated to providing you
                with the highest quality online fitting experience. With our
                state-of-the-art technology and personalized approach, we offer
                a comprehensive range of fitting services tailored to meet your
                individual needs and preferences. Whether you're a seasoned
                golfer looking to fine-tune your equipment or a beginner seeking
                guidance on the right clubs for your game, we're here to help.
                Our commitment to excellence, coupled with our passion for the
                game of golf, ensures that you'll receive expert advice and
                recommendations every step of the way. Discover the difference
                that proper equipment fitting can make in your golf game with
                Elevate Golf Fitting. Feel free to adjust the language or
                details to better fit your specific online golf fitting service.
                Let me know if you need further assistance!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}