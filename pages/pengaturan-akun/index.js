import Head from "next/head";
import Image from "next/image";
import Navigation from "../../components/Navigation";

export default function Home() {
  return (
    <div>
      <Head></Head>
      <Navigation />
      <div className="px-3 py-5">
        <div className="flex flex-col items-center justify-centertext-prime">
          <h2 className="pb-5 font-semibold">Pengaturan Akun</h2>
          <div className="border w-full flex flex-col justify-center items-center py-5 gap-3 shadow-lg">
            <div className="relative h-20 w-20">
              <Image
                className="object-contain cursor-pointer"
                src="/icons/ava.png"
                alt="image"
                layout="fill"
              ></Image>
            </div>
            <div className="w-full px-4 space-y-3">
              <div className="w-full">
                <h3 className="font-semibold">Nama Lengkap</h3>
                <div className="relative">
                  <input
                    className={`w-full shadow-sm py-3 text-prime px-4 mb-2 border-prime border placeholder-gray-400  `}
                    placeholder="Nama Lengkap"
                  />
                </div>
              </div>
              <div className="w-full">
                <h3 className="font-semibold">Nomor Telepon</h3>
                <div className="relative">
                  <input
                    className={`w-full shadow-sm py-3 text-prime px-4 mb-2 border-prime border placeholder-gray-400  `}
                    placeholder="Nomor Telepon"
                  />
                </div>
              </div>
              <div className="w-full">
                <h3 className="font-semibold">Email</h3>
                <div className="relative">
                  <input
                    className={`w-full shadow-sm py-3 text-prime px-4 mb-2 border-prime border placeholder-gray-400  `}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="w-full">
                <h3 className="font-semibold">Lokasi</h3>
                <div className="relative">
                  <input
                    className={`w-full shadow-sm py-3 text-prime px-4 mb-2 border-prime border placeholder-gray-400  `}
                    placeholder="Lokasi"
                  />
                </div>
              </div>
              <div className="w-full flex items-center py-3">
                <button className="w-full py-3 border bg-prime text-white border-prime">
                  Perbarui Informasi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
