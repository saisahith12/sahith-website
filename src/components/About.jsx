import aboutImg from "../assets/SahithPhoto.jpg";
import { ABOUT_TEXT } from "../constants";
import {motion} from "framer-motion";

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:px-8"
        >
          <div className="flex items-center justify-center px-4 lg:px-16">
            <img className="max-h-96 object-cover" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:px-8"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-4 lg:py-16 px-4 lg:px-0">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

