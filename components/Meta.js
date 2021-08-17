import Head from "next/head";

import React from "react";

export const Meta = ({ keywords, description, title }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="./images/favis.ico/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="./images/favis.ico/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="./images/favis.ico/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="./images/favis.ico/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="./images/favis.ico/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="./images/favis.ico/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="./images/favis.ico/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="./images/favis.ico/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./images/favis.ico/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="./images/favis.ico/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favis.ico/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="./images/favis.ico/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./images/favis.ico/favicon-16x16.png"
        />
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "Vula - Easy Payments",
  keywords: "credit purchases,marketing, consumer, fintech, buy now pay later",
  description:
    "Buy what you need today and pay later in 4 payments with Vula. No interest. Available at all of your favorite online stores with the Vula app.",
};

export default Meta;
