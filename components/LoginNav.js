import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function LoginNav({ toggle }) {
  const { data: session } = useSession();
  //Signed in as {session.user.email}
  if (session) {
    return (
      <div className="pt-5 pb-20 w-full shadow-lg text-prime flex flex-col items-center">
        {console.log(session)}
        <div className="w-80">
          <div className="flex items-center space-x-5 text-prime">
            <div className="relative h-20 w-20">
              <Image
                className="object-contain cursor-pointer rounded-full"
                src={session.user.image}
                alt="avatar"
                layout="fill"
              />
            </div>
            <div className="flex flex-col">
              <p>{session.user.name}</p>
              <p className="text-sm">belum ada nomor hp</p>
              <p className="text-sm">{session.user.email}</p>
            </div>
          </div>
          <div className="border-b border border-fourth my-5" />
          <div className="space-y-3">
            <Link href="/iklan-saya">
              <div className="flex items-center gap-2">
                <Image
                  className="object-contain cursor-pointer"
                  src="/icons/iklan-saya-icon.svg"
                  alt="iklan saya icon"
                  width={20}
                  height={20}
                />
                <p>Iklan Saya</p>
              </div>
            </Link>
            <Link href="/pengaturan-akun">
              <div className="flex items-center gap-2">
                <Image
                  className="object-contain cursor-pointer"
                  src="/icons/pengaturan-akun-icon.svg"
                  alt="pengaturan icon icon"
                  width={20}
                  height={20}
                />
                <p>Pengaturan Akun</p>
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <Image
                className="object-contain cursor-pointer"
                src="/icons/bantuan-icon.svg"
                alt="bantuan icon"
                width={20}
                height={20}
              />
              <p>Bantuan</p>
            </div>
          </div>
          <div className="border-b border border-fourth mt-5 mb-8" />
          <div className="space-y-3">
            <Link href="/unggah-iklan">
              <button
                className="py-3 border-2 border-second bg-second w-80 text-center text-white"
                onClick={toggle}
              >
                <p>Unggah Iklan</p>
              </button>
            </Link>
            <button
              className="py-3 border-2 border-second w-80 text-center text-second"
              onClick={() => signOut()}
            >
              <p>Keluar</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="pt-5 pb-20 w-full shadow-lg text-prime flex flex-col items-center">
      <div className="w-80">
        <p>Selamat datang di Pepamarket. Masuk/daftar untuk:</p>
        <ul className="pt-3 pb-5 space-y-1">
          <li>
            <div className="flex items-center gap-2">
              <Image
                className="object-contain cursor-pointer"
                src="/icons/check-icon.svg"
                alt="check icon"
                width={20}
                height={20}
              />
              <p>Dapat mengunggah iklan</p>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2">
              <Image
                className="object-contain cursor-pointer"
                src="/icons/check-icon.svg"
                alt="check icon"
                width={20}
                height={20}
              />
              <p>Mengatur iklan dengan mudah</p>
            </div>
          </li>
        </ul>
        <button
          className="py-3 border-2 border-second bg-second w-80 text-center text-white"
          onClick={() => signIn()}
        >
          Masuk/daftar
        </button>
      </div>
    </div>
  );
}

export default LoginNav;
