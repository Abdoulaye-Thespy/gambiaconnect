import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/components/PreLoader";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react"

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [loader]);

  return (

    <Fragment>
      <SessionProvider session={session}>
        <Head>
          <title>Gambia Connect</title>
          <link
            rel="shortcut icon"
            href="assets/images/logo-1.ico"
            type="image/png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600&family=Quicksand:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        {pageProps.loader && <PreLoader />}
        <Component {...pageProps} />
      </SessionProvider>
    </Fragment>
  );
};
export default MyApp;
