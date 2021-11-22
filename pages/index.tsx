import type { NextPage } from "next";
import Head from "next/head";
import { useTheme } from "../context/ThemeProvider";

const Home: NextPage = () => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="description" content="next.js " />

        <title>next.js-tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <p>Get started by editing </p>
        <button onClick={() => theme.toggle()}>update theme</button>
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
