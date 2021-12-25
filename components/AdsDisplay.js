import Image from "next/image";
import Link from "next/link";

function AdsDisplay() {
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
      title: "ikan koi",
      desc: "ikan koi",
      harga: "300.000",
      toko: "toko ikan sby",
      url: "/sample2.png",
      alt: "ikan",
    },
    {
      id: 3,
      title: "anjing husky",
      desc: "anjing husky jantan lokasi manado",
      harga: "2.800.000",
      toko: "petshop",
      url: "/sample3.png",
      alt: "ayam",
    },
    {
      id: 4,
      title: "kucing persian",
      desc: "jual kucing persian betina umur 1th",
      harga: "4.800.000",
      toko: "pertshop.id",
      url: "/sample4.png",
      alt: "ayam",
    },
    {
      id: 5,
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
      <div className="flex flex-col justify-center items-center py-5 gap-5">
        <Link href="/iklan/ayam">
          <div className="border p-6">
            <div className="relative h-48 w-64 bg-gray-300">
              <Image
                className="object-contain cursor-pointer"
                src={sampleAds[0].url}
                alt="image"
                layout="fill"
              ></Image>
            </div>
            <div className="font-semibold text-prime">{sampleAds[0].title}</div>
            <div className="font-semibold text-third ">
              Rp. {sampleAds[0].harga}
            </div>
            <div className="font-semibold text-sm text-gray-400">
              {sampleAds[0].toko}
            </div>
          </div>
        </Link>
        <div className="border p-6">
          <div className="relative h-48 w-64 bg-gray-300">
            <Image
              className="object-contain cursor-pointer"
              src={sampleAds[1].url}
              alt="image"
              layout="fill"
            ></Image>
          </div>
          <div className="font-semibold text-prime">{sampleAds[1].title}</div>
          <div className="font-semibold text-third ">
            Rp. {sampleAds[1].harga}
          </div>
          <div className="font-semibold text-sm text-gray-400">
            {sampleAds[1].toko}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="border p-2">
            <div className="relative h-24 w-32 bg-gray-300">
              <Image
                className="object-contain cursor-pointer"
                src={sampleAds[2].url}
                alt="image"
                layout="fill"
              ></Image>
            </div>
            <div className="font-semibold text-prime">{sampleAds[2].title}</div>
            <div className="font-semibold text-third ">
              Rp. {sampleAds[2].harga}
            </div>
            <div className="font-semibold text-sm text-gray-400">
              {sampleAds[2].toko}
            </div>
          </div>
          <div className="border p-2">
            <div className="relative h-24 w-32 bg-gray-300">
              <Image
                className="object-contain cursor-pointer"
                src={sampleAds[3].url}
                alt="image"
                layout="fill"
              ></Image>
            </div>
            <div className="font-semibold text-prime">{sampleAds[3].title}</div>
            <div className="font-semibold text-third ">
              Rp. {sampleAds[3].harga}
            </div>
            <div className="font-semibold text-sm text-gray-400">
              {sampleAds[3].toko}
            </div>
          </div>
          <div className="border p-2">
            <div className="relative h-24 w-32 bg-gray-300">
              <Image
                className="object-contain cursor-pointer"
                src={sampleAds[4].url}
                alt="image"
                layout="fill"
              ></Image>
            </div>
            <div className="font-semibold text-prime">{sampleAds[4].title}</div>
            <div className="font-semibold text-third ">
              Rp. {sampleAds[4].harga}
            </div>
            <div className="font-semibold text-sm text-gray-400">
              {sampleAds[4].toko}
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
            <div className="font-semibold text-prime">{sampleAds[1].title}</div>
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
  );
}

export default AdsDisplay;
