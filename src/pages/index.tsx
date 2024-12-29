import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightBlue();

  return (
    <>
      <Head>
        <title>Hello Next App</title>
      </Head>
      <Header />
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Main page="index">
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
