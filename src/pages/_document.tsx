import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="theme-compiled">
        <Head>
          <link rel="stylesheet" href="../src/globals.css" />
          <meta name="description" content="My awesome Next.js app" />
        </Head>
        <body className="antialiased text-lg leading-base">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
