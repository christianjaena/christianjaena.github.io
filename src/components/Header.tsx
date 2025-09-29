"use client";
import Head from "next/head";
import { useEffect } from "react";

type HeaderProps = {
  title?: string;
};

export const Header = ({ title }: HeaderProps) => {
  useEffect(() => {
    if (title) {
      document.title = title ? `Christian Jaena | ${title}` : "Christian Jaena";
    }
  }, [title]);

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </Head>
  );
};

export default Header;
