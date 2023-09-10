import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import { ThemeProvider } from "@material-tailwind/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useEffect } from "react";
import AOS from "aos";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.body.className = pageProps.bodyClass
      ? pageProps.bodyClass
      : document.body.className;
  });

  const Layout =
    (Component as any).layout ||
    (({ children }: { children: React.ReactNode }) => <>{children}</>);

  return (
    <React.Fragment>
      <Head>
        <title>
          {pageProps.titlePage ? pageProps.titlePage : "soure-next-js"}
        </title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="logo.svg" type="image/png" />
      </Head>
      <ThemeProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextThemesProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
