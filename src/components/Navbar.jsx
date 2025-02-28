import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/khalilhaimer/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-blue-600 transition-colors duration-300"/>
            </a>
            <a href="https://github.com/THE-Bandersnatch" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-gray-600 transition-colors duration-300"/>
            </a>
        </div>
    </nav> 
  )
}

export default Navbar 