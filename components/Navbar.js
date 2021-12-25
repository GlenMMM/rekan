import Link from "next/link";
import Image from "next/image";

const Navbar = ({ toggle, toggleC }) => {
  return (
    <nav
      className="flex justify-between xl:justify-around items-center h-16 sticky top-0 z-30 bg-prime"
      role="navigation"
    >
      <div className="flex pl-4 md:pl-12 lg:pl-20 xl:pl-32 items-center">
        <Link href="/" passHref>
          <Image
            className="object-contain cursor-pointer"
            src="/icons/icon.png"
            alt="logo"
            width={38}
            height={40}
          />
        </Link>
      </div>

      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-12 lg:pr-20 xl:pr-32 md:flex hidden space-x-10 items-center">
        <Link className="p-4" href="/" passHref>
          <a className="hover:font-semibold active:font-semibold">Home</a>
        </Link>
        <Link className="p-4" href="/#services" passHref>
          <a className="hover:font-semibold active:font-semibold">Services</a>
        </Link>
        <Link className="p-4" href="/our-works" passHref>
          <a className="hover:font-semibold active:font-semibold">Our works</a>
        </Link>
        <a
          className="p-4 cursor-pointer hover:font-semibold active:font-semibold"
          onClick={toggleC}
        >
          Contact us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
