import React from "react";

const Slides = () => {
  return (
    <>

      <section>
        <div className="tracking-widest mt-24 text-3xl grid grid-cols-1 md:grid-cols-3 gap-10 font-semibold md:text-4xl ">
          <div className="flex items-center  bg-cyan-300 rounded-3xl min-h-[400px] p-10">
            I’ll bring colour, big energy and oriented problem solving thinking.
          </div>
          <div className="flex items-center   bg-red-500 rounded-3xl min-h-[400px] md:col-span-2 p-10">
            Learning, and surpassing any challenges that occurs, by different
            methods.
          </div>
          <div className="flex items-center  bg-purple-400 rounded-3xl min-h-[400px] md:col-span-3   p-10">
            Bridge the gap between solving problems and creating new routes —
            speaking both languages.
          </div>
          <div className=" flex items-center  bg-yellow-300 rounded-3xl min-h-[400px]  md:col-span-2 p-10">
            I will bring leadership into the team, managing high scale projects
            and dividing everyones requirement.
          </div>
          <div className="flex items-center  bg-green-400 rounded-3xl min-h-[400px]  p-10">
            Teach teams to move at velocity and have a hell of a lot of fun
            doing it.
          </div>
        </div>
      </section>
    </>
  );
};

export default Slides;
