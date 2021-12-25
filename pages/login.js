import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

function login({ providers }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="absolute top-0 right-0 cursor-pointer pt-3 px-3">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-black"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="pb-5">
          <div className="relative h-40 w-40 ml-5">
            <Image
              className="object-contain cursor-pointer"
              src="/icons/icon.png"
              alt="pepa market logo"
              layout="fill"
            />
          </div>
        </div>
        <div className="space-y-3">
          <div
            key={providers.google.id}
            className="bg-white w-80 py-2 text-center border-2 border-[#A5A5A5] text-[#818181]"
          >
            <button
              onClick={() => signIn(providers.google.id, { callbackUrl: "/" })}
            >
              <div className="flex items-center justify-center gap-2">
                <Image
                  className="object-contain cursor-pointer"
                  src="/icons/google-icon.svg"
                  alt="google icon"
                  width={20}
                  height={20}
                />
                <p className="text-lg">
                  Masuk/daftar dengan {providers.google.name}
                </p>
              </div>
            </button>
          </div>
          <div
            key={providers.facebook.id}
            className="bg-[#5270B0] w-80 py-2 text-center border-2 border-[#5270B0]"
          >
            <button
              onClick={() =>
                signIn(providers.facebook.id, { callbackUrl: "/" })
              }
            >
              <div className="flex items-center justify-center gap-2">
                <Image
                  className="object-contain cursor-pointer"
                  src="/icons/facebook-icon.svg"
                  alt="facebook icon"
                  width={20}
                  height={20}
                />
                <p className="text-lg text-white">
                  Masuk/daftar dengan {providers.facebook.name}
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
