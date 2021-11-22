import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "../context/ThemeProvider";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
