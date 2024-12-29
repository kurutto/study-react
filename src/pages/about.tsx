import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import classes from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCounterType } from "src/hooks/useCounterType";
import { useInputArrayType } from "src/hooks/useInputArrayType";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function About({ count, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd }:useCounterType & useInputArrayType) {

  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <div
        className={`${classes.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Main page="about">
          <div style={{ textAlign: "center" }}>
            {isShow ? <h1>{count}</h1> : null}

            <p>
              <button onClick={handleClick}>ボタン</button>
            </p>
            <p>
              <button onClick={handleDisplay}>
                {isShow ? "非表示" : "表示"}
              </button>
            </p>
            <p>
              <input type="text" value={text} onChange={handleChange} />
            </p>
            <p>
              <button onClick={handleAdd}>追加</button>
            </p>
            <ul>
              {array.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
        </Main>
        <Footer />
      </div>
    </>
  );
}
