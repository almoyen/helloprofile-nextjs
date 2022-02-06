import React from "react";
import Head from "next/head";

export default function MetaTags() {
  return (
    <Head>
      <title>Kelvin Chikezie on HelloProfile</title>
      <meta name="title" content="Kelvin Chikezie on HelloProfile" />
      <meta
        name="description"
        content="Find, connect and save Kelvin Chikezie's Profile on HelloProfile."
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://helloprofile.vercel.app/kelvin"
      />
      <meta property="og:title" content="Kelvin Chikezie on HelloProfile" />
      <meta
        property="og:description"
        content="Find, connect and save Kelvin Chikezie's Profile on HelloProfile."
      />
      <meta
        property="og:image"
        content="https://helloprofile.vercel.app/images/image-2-1.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://helloprofile.vercel.app/kelvin"
      />
      <meta
        property="twitter:title"
        content="Kelvin Chikezie on HelloProfile"
      />
      <meta
        property="twitter:description"
        content="Find, connect and save Kelvin Chikezie's Profile on HelloProfile."
      />
      <meta
        property="twitter:image"
        content="https://helloprofile.vercel.app/images/image-2-1.png"
      />
    </Head>
  );
}
