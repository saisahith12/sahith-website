import logo from "../assets/saisahithLogo.png";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-5 w-32" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center gap-4 text-2xl pr-2 w-22 ">
        <a href="https://www.linkedin.com/in/sai-sahith-vangala/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="h-8 w-8"/></a>
        <a href="mailto:saisahith1711@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail className="h-8 w-8" /></a>

        <a href="https://github.com/saisahith12" target="_blank" rel="noopener noreferrer"><FaGithub className="h-8 w-8" /></a>
      </div>
    </nav>
  );
}

export default Navbar;
