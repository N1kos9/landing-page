import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Slides from "../src/components/Slides.jsx";

function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 4", "1.33 1"],
  });

  return (
    <>
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto font-mono">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 2.5 }}
          className="text-xl p-5 text-black/[0.8] text-right"
        >
          <a
            href="https://github.com/N1kos9"
            target={"_blank"}
            className="p-3 hover:underline hover:underline-offset-8"
          >
            Github
          </a>
          <a
            target={"_blank"}
            href="https://www.linkedin.com/in/nikos-m-631366284/"
            className="p-3 hover:underline hover:underline-offset-8"
          >
            Linkedin
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.0, delay: 0.5 }}
          className="mt-16 text-6xl md:text-9xl font-semibold"
        >
          <h1>
            Hey <br /> I'm Nikos
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 1.0 }}
          className="mt-12 text-justify md:text-4xl text-2xl flex justify-end mr-8"
        >
          <h2 className="md:w-5/6 text-right">
            a web developer, specialised in front-end position, team leader and
            dream maker.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 2.5 }}
          className="flex justify-center md:mt-56 mt-36"
        >
          <motion.img
            ref={ref}
            style={{ scale: scrollYProgress, opacity: 1 }}
            src="/eye.jpg"
            className="rounded-3xl"
            alt="art-image"
          />
        </motion.div>
        <div className="md:text-3xl text-base mt-48 flex justify-end">
          <p className="md:w-5/6 text-justify">
            Originally from Romania, I am an 18 years old guy who started his
            web journey at 17 years old, with the purpose of pursuing a good
            career for my future.
          </p>
        </div>
        <div className="md:text-4xl mt-24  flex justify-end ">
          <h2 className="text-justify md:w-5/6 font-black">
            I’ve spent a good amount of time creating projects and testing my
            ideas trough web envirement in order to specialise in web industry.
          </h2>
        </div>
        <div className="md:text-3xl text-base mt-24 flex justify-end">
          <p className="md:w-5/6 text-justify">
            I’m looking for impact-driven orgs with a creative team in place,
            that are spontaneous and well prepared. They have the headcount and
            skillset, and need someone to adapt theyre ideas into reality. Maybe
            an organisation, or a culture, perhaps the structure, I am here to
            make your ideas to bring life.
          </p>
        </div>
        <div className="mt-16 text-5xl md:text-8xl font-semibold">
          <h1 className="">Here’s what you can expect from me...</h1>
        </div>
        <Slides />
        <div className="p-3 md:mt-56 mt-36 flex flex-col text-left items-end text-xl">
          <p className="">
            Borned in Romania, and visited all the beatyes places. Give it a try
          </p>
          <p className="">
            Ready to work togheter? Let's&nbsp;
            <a
              href="mailto:onkl3p@gmail.com"
              target="_blank"
              className="hover:underline hover:underline-offset-8"
            >
              get started
            </a>
          </p>
        </div>
        <hr className="mt-10" />
        <div className=" p-3 text-2xl flex justify-between">
          <h1>© Nikos</h1>
          <div className="flex gap-4">
            <a
              href="https://github.com/N1kos9"
              target={"_blank"}
              className="hover:underline hover:underline-offset-8"
            >
              Github
            </a>
            <a
              target={"_blank"}
              href="https://www.linkedin.com/in/nikos-m-631366284/"
              className="hover:underline hover:underline-offset-8"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
