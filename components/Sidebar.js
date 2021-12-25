import Link from "next/link";
import Image from "next/image";
import LoginNav from "./LoginNav";
const Sidebar = ({ isOpen, toggle, toggleC }) => {
  return (
    <div
      className={
        isOpen
          ? "fixed visible z-30 top-0 w-full h-full md:hidden translate-x-0 transform transition-all duration-500 ease-out"
          : "translate-x-100 invisible"
      }
    >
      <div className="absolute top-0 right-0 z-30 w-full flex-col bg-white">
        <div className="flex px-4 py-3 items-center justify-between bg-prime">
          <div>
            <Link href="/" passHref>
              <a className="flex items-center">
                <Image
                  className="object-contain cursor-pointer"
                  src="/icons/icon.png"
                  alt="logo"
                  width={38}
                  height={40}
                />
              </a>
            </Link>
          </div>
          <div className="cursor-pointer" onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-white"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <LoginNav toggle={toggle} />
      </div>
    </div>
  );
};

export default Sidebar;
