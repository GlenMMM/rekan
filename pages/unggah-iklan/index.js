import Head from "next/head";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import { useRouter } from "next/router";
import AdsDisplay from "../../components/AdsDisplay";
import CreateAds from "../../components/CreateAds";

export default function Home() {
  return (
    <div>
      <Head></Head>
      <Navigation />
      <CreateAds />
    </div>
  );
}
