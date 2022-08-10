import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Links from "next/link";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src="/Ljc.png" alt="" width="50px" />
      </div>
      {/* menu */}
      <ul className="hidden md:flex">
        <li className="">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="group transition duration-300"
          >
            Home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-300"></span>
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="group transition duration-300"
          >
            About
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-300"></span>
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="group transition duration-300"
          >
            Skills
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-300"></span>
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="group transition duration-300"
          >
            Work
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-300"></span>
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="group transition duration-300"
          >
            Contact
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-300"></span>
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars className="cursor-pointer" />
        ) : (
          <FaTimes className="cursor-pointer" />
        )}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            className="group transition duration-300"
          >
            Home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-300"></span>
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            className="group transition duration-300"
          >
            About
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-300"></span>
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            className="group transition duration-300"
          >
            Skills
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-300"></span>
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
            className="group transition duration-300"
          >
            Work
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-300"></span>
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            className="group transition duration-300"
          >
            Contact
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-yellow-300"></span>
          </Link>
        </li>
      </ul>
      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <Links href="https://www.linkedin.com/in/larry-cutts-742406169/">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                target="_blank"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </Links>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <Links href="https://github.com/ljcutts">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                target="_blank"
              >
                Github <FaGithub size={30} />
              </a>
            </Links>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#fb0000]">
            <Links href="https://www.youtube.com/channel/UCifzIH_LbTJVjHbP97Qy8-A">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                target="_blank"
              >
                Youtube <FaYoutube size={30} />
              </a>
            </Links>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3e7bec]">
            <Links href="https://twitter.com/LarryCutts6">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                target="_blank"
              >
                Twitter <FaTwitter size={30} />
              </a>
            </Links>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b8]">
            <Links href="https://mail.google.com/mail/u/0/#inbox?compose=new">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                target="_blank"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </Links>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <Links href="https://docs.google.com/document/d/1OI88qCFdqS2-mMleixRIcGx-I5ykqtBv63X7vU0AHIo/edit?usp=sharing">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                target="_blank"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </Links>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
