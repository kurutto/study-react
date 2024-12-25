import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const foo = 123;
  const handleClick =  useCallback((e:React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert(foo);
  },[])
  return (
    <>
      <Head>
        <title>Hello Next App</title>
      </Head>
      <Header />
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <a
          href="/about"
          onClick={handleClick}
        >
          ボタン
        </a>
        <Main page="index" />
        <Footer />
      </div>
    </>
  );
}
