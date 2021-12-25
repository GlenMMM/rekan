import Head from "next/head";
import Image from "next/image";
import Navigation from "../../components/Navigation";

export default function Home() {
  const sampleAds = [
    {
      id: 1,
      title: "ayam",
      desc: "ayam jantan dewasa berat 1kg",
      harga: "800.000",
      toko: "toko ayam sby",
      url: "/sample1.png",
      alt: "ayam",
    },
    {
      id: 2,
      title: "ayam",
      desc: "ayam betina berat 1kg",
      harga: "800.000",
      toko: "toko ayam sby",
      url: "/sample5.png",
      alt: "ayam",
    },
  ];
  return (
    <div>
      <Head></Head>
      <Navigation />
      <div>
        <div className="flex flex-col justify-center items-center py-5 gap-5">
          <h2 className="font-semibold text-prime">Informasi Akun</h2>
          <div className="border px-2 py-2 text-prime flex space-x-5 max-w-[308px]">
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
        </div>
        <div className="flex flex-col justify-center items-center py-5 gap-5">
          <h2 className="font-semibold text-prime">Iklan Aktif</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="border p-2">
              <div className="relative h-24 w-32 bg-gray-300">
                <Image
                  className="object-contain cursor-pointer"
                  src={sampleAds[0].url}
                  alt="image"
                  layout="fill"
                ></Image>
              </div>
              <div className="font-semibold text-prime">
                {sampleAds[0].title}
              </div>
              <div className="font-semibold text-third ">
                Rp. {sampleAds[0].harga}
              </div>
              <div className="font-semibold text-sm text-gray-400">
                {sampleAds[0].toko}
              </div>
            </div>
            <div className="border p-2">
              <div className="relative h-24 w-32 bg-gray-300">
                <Image
                  className="object-contain cursor-pointer"
                  src={sampleAds[0].url}
                  alt="image"
                  layout="fill"
                ></Image>
              </div>
              <div className="font-semibold text-prime">
                {sampleAds[0].title}
              </div>
              <div className="font-semibold text-third ">
                Rp. {sampleAds[0].harga}
              </div>
              <div className="font-semibold text-sm text-gray-400">
                {sampleAds[0].toko}
              </div>
            </div>
          </div>
          <h2 className="font-semibold text-prime">Iklan Tidak Aktif</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="border p-2">
              <div className="relative h-24 w-32 bg-gray-300">
                <Image
                  className="object-contain cursor-pointer"
                  src={sampleAds[1].url}
                  alt="image"
                  layout="fill"
                ></Image>
              </div>
              <div className="font-semibold text-prime">
                {sampleAds[1].title}
              </div>
              <div className="font-semibold text-third ">
                Rp. {sampleAds[1].harga}
              </div>
              <div className="font-semibold text-sm text-gray-400">
                {sampleAds[1].toko}
              </div>
            </div>
            <div className="border p-2">
              <div className="relative h-24 w-32 bg-gray-300">
                <Image
                  className="object-contain cursor-pointer"
                  src={sampleAds[1].url}
                  alt="image"
                  layout="fill"
                ></Image>
              </div>
              <div className="font-semibold text-prime">
                {sampleAds[1].title}
              </div>
              <div className="font-semibold text-third ">
                Rp. {sampleAds[1].harga}
              </div>
              <div className="font-semibold text-sm text-gray-400">
                {sampleAds[1].toko}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
