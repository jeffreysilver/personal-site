import React, { SFC, ReactType, ReactPropTypes } from "react";
import Head from "next/head";
import "react-circular-progressbar/dist/styles.css";
import "./global.scss";

type Props = {
  Component: ReactType;
  pageProps: ReactPropTypes;
};

const App: SFC<Props> = (props: Props) => {
  const { Component, pageProps } = props;
  return (

    <React.Fragment>
      <Head>
        <title>jeffrey silver</title>
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  )
};

export default App;
