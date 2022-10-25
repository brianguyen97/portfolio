import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Brian, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla
            odio, volutpat eu semper in, tincidunt quis velit. Nunc quam mauris,
            eleifend a lacus a, pharetra ultrices lacus. Ut ultrices lacus ut
            enim ultrices tincidunt. Duis maximus pulvinar ipsum, ac rhoncus
            orci placerat et. Curabitur elit tellus, fringilla vitae ante vel,
            bibendum convallis nunc. Donec commodo lacus sed leo volutpat
            laoreet. Vestibulum ac odio quis lacus pellentesque malesuada. Donec
            ac enim aliquam, tincidunt nunc et, accumsan elit.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
