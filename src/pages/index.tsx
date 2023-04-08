import HomePage from "@/modules/HomePage/HomePage";
import Head from "next/head";

interface Props {}

export default function Home(props: Props) {
  return (
    <>
      <Head>
        <title>Aldem Demoral Freelancer</title>
        <meta name="description" content="Freelance website by Aldem Demoral" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
