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

const About = (props:useCounterType & useInputArrayType) =>  {
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
            {props.isShow ? <h1>{props.doubleCount}</h1> : null}

            <p>
              <button onClick={props.handleClick}>ボタン</button>
            </p>
            <p>
              <button onClick={props.handleDisplay}>
                {props.isShow ? "非表示" : "表示"}
              </button>
            </p>
            <p>
              <input type="text" value={props.text} onChange={props.handleChange} />
            </p>
            <p>
              <button onClick={props.handleAdd}>追加</button>
            </p>
            <ul>
              {props.array.map((item) => {
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

export default About;