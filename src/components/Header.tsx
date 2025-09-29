"use client";
import Head from "next/head";

type HeaderProps = {
  title?: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title ? `Christian Jaena | ${title}` : "Christian Jaena"}</title>
    </Head>
  );
};

export default Header;
