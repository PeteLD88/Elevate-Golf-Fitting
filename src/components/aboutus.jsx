import React from "react";
import Footer from "./footer";
import Nav from "./nav";

function AboutUs() {
  return (
    <div
      id="AboutUsPage"
      className="font-josefin flex flex-col min-h-screen w-full items-center"
    >
      <Nav />
      <main className="py-16">
        <div className="max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-2">
            <div>
              <img
                src="https://file.rendit.io/n/NNXG74SySO27LKpDnxjX.png"
                className="rounded-l"
              />
              <img
                src="https://file.rendit.io/n/E8w6NOkS4DOVCSlIWmok.png"
                className="rounded-l mt-6"
              />
            </div>
            <div>
              <h2 className="text-8xl font-bold mb-6 text-[#75ff52]">
                Who are We?
              </h2>
              <p className="text-4xl py-36 mr-24 text-[#75ff52]">
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

export default AboutUs;
