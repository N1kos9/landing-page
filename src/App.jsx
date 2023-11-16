import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 4", "1.33 1"],
  });
  return (
    <>
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto font-mono">
        <div className="text-xl p-5 text-black/[0.8] text-right">
          <a href="" className="p-3">
            Github
          </a>
          <a href="" className="p-3">
            Linkedin
          </a>
        </div>
        <div className="mt-16 text-5xl md:text-9xl font-semibold">
          <h1>
            Hey <br /> I'm Nikos
          </h1>
        </div>
        <div className="mt-12 text-justify md:text-4xl flex justify-end mr-8">
          <h2 className="md:w-5/6 text-right">
            a web developer, specialised in front-end position, team leader and
            dream maker.
          </h2>
        </div>
        <div className="flex justify-center md:mt-56 mt-36">
          <motion.img
            ref={ref}
            style={{ scale: scrollYProgress, opacity: 1 }}
            src="/eye.jpg"
            className="rounded-3xl"
            alt=""
          />
        </div>
        <div className="md:text-3xl text-base mt-48 flex justify-end">
          <p className="md:w-5/6 text-justify">
            I’ve spent a couple of decades creating brands and digital products
            and obsessing over what makes them fly. I have a creative studio
            called The Workshop and invest in early-stage ventures —
            collaborating on brave ideas with amazing people.
          </p>
        </div>
        <div className="md:text-4xl mt-24  flex justify-end ">
          <h2 className="text-justify md:w-5/6 font-black">
            I’m now going directly to the source of what makes or breaks a brand
            — people.
          </h2>
        </div>
        <div className="md:text-3xl text-base mt-24 flex justify-end">
          <p className="md:w-5/6 text-justify">
            I’m looking for impact-driven orgs with a creative team in place,
            but aren’t seeing the outcomes they‘re looking for. They have the
            headcount and skillset, but something isn’t clicking. Maybe it’s
            cultural, perhaps it’s the standard of work or a misalignment
            between creative and commercial objectives. I’m here to solve these
            problems.
          </p>
        </div>
        <div className="mt-16 text-5xl md:text-8xl font-semibold">
          <h1 className="">Here’s what you can expect from me...</h1>
        </div>
        <div className="tracking-widest mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 font-semibold text-4xl ">
          <div className="flex items-center   bg-cyan-300 rounded-3xl min-h-[400px] p-10">
            I’ll bring colour, big energy and oriented problem solving thinking.
          </div>
          <div className="flex items-center   bg-red-500 rounded-3xl min-h-[400px] md:col-span-2 p-10">
            Learning, and surpassing any challenges that occurs, by different
            methods
          </div>
          <div className="flex items-center  bg-purple-400 rounded-3xl min-h-[400px] md:col-span-3   p-10">
            Bridge the gap between creative and commercial objectives — speaking
            both languages.
          </div>
          <div className="flex items-center  bg-green-400 rounded-3xl min-h-[400px]  p-10">
            Teach teams to move at velocity and have a hell of a lot of fun
            doing it.
          </div>
          <div className=" flex items-center  bg-yellow-300 rounded-3xl min-h-[400px]  md:col-span-2 p-10">
            I will bring leadership into the team, managing high scale projects
            and dividing everyones requirement
          </div>
        </div>
        <div className="md:mt-56 mt-36 flex flex-col text-left items-end">
          <p className="">
            Borned in Romania, and visited all the beatyes places. Give it a try
          </p>
          <p className="">
            Ready to work togheter? Let's <a href="">get started</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
