import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 z-[1] w-full duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 className="font-bold text-4xl">Captur</h1>
        </Link>
        <ul className="hidden sm:flex sm:gap-4">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="sm:hidden z-10">
          <AiOutlineMenu size={20} />
        </div>
        <div className="sm:hidden absolute inset-0 flex justify-center items-center w-full h-screen bg-black text-center">
          <ul>
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
