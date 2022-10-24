import React from "react";

export default function About() {
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
            Poop in the plant pot jump on fridge i is not fat, i is fluffy
            really likes hummus for ears back wide eyed but carrying out
            surveillance on the neighbour's dog growl at dogs in my sleep. Stare
            at ceiling light you have cat to be kitten me right meow.
          </div>
        </div>
      </div>
    </div>
  );
}
