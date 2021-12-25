import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../../../components/Navigation";

export default function Home() {
  const sampleAds = [
    {
      id: 1,
      title: "Ayam",
      desc: "Ayam jantan dewasa berat 1kg ini deskirpsi ini deskirpsi ini deskirpsi ini deskirpsi ini deskirpsi ini deskirpsi ini deskirpsi",
      harga: "800.000",
      lokasi: "surabaya",
      toko: "toko ayam sby",
      url: "/sample1.png",
      alt: "ayam",
    },
  ];
  return (
    <div>
      <Head></Head>
      <Navigation />
      <div>
        <div className="flex items-center justify-between px-5 py-2">
          <Link href="/" className="cursor-pointer">
            <div>
              <span className="font-bold text-xl">{`< `}</span>Kembali
            </div>
          </Link>
          <div>
            <div className="relative h-5 w-5">
              <Image
                className="object-contain cursor-pointer"
                src="/icons/share.svg"
                alt="image"
                layout="fill"
              ></Image>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-5 py-2">
          <div className="relative h-52 w-80 bg-gray-300">
            <Image
              className="object-contain cursor-pointer"
              src="/sample1.png"
              alt="image"
              layout="fill"
            ></Image>
          </div>
          <div className="text-sm flex justify-between items-center w-full py-3">
            <p className="text-gray-500">dilihat: 32</p>
            <p className="text-red-500">laporkan iklan</p>
          </div>
          <div className="border-b-2 w-full border-gray-400" />
          <div className="w-full text-prime">
            <p className="text-xl font-semibold">{sampleAds[0].title}</p>
            <p>Rp. {sampleAds[0].harga}</p>
            <p className="text-second">{sampleAds[0].desc}</p>
            <p className="py-2">Lokasi: {sampleAds[0].lokasi}</p>
          </div>
          <div className="py-5">
            <div className="border px-2 py-2 text-prime flex flex-col space-y-5 max-w-[320px]">
              <div className="flex space-x-5">
                <div className="relative h-24 w-24 bg-gray-300 rounded-full">
                  <Image
                    className="object-contain cursor-pointer rounded-full"
                    src={sampleAds[0].url}
                    alt="image"
                    layout="fill"
                  ></Image>
                </div>
                <div>
                  <p className="font-semibold">Jeremy Putra Wijanto</p>
                  <p>Surabaya</p>
                  <p className="text-gray-400 text-sm">
                    bergabung sejak desember 2021
                  </p>
                </div>
              </div>
              <div className="border bg-prime text-white py-2 text-center">
                hubungi Whatsapp
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
