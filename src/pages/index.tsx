import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState('');
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([] as string[]);

  const handleClick = useCallback(() => {
    if(count<10){
      setCount(prevCount => prevCount + 1);
    }
  },[count]);

  const handleDisplay = useCallback(() => {
    setIsShow(prevIsShow => !prevIsShow)
  },[]);

  const handleChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.length > 5){
      alert('5文字以内にしてください');
      return;
    }
    setText(e.target.value.trim());
  },[]);

  const handleAdd = useCallback(() => {
    // if(array.some((item) => item === text)){
    //   alert('同じ要素が既に存在します。');
    //   return;
    // }
    // setArray(prevArray => {
    //   return [...prevArray,text]
    // });
    setArray(prevArray => {
      if(prevArray.some((item) => item === text)){
        alert('同じ要素が既に存在します。');
        return prevArray;
      }
      return [...prevArray,text];
    });
  },[text,array]);
  
  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      document.body.style.backgroundColor = '';
    }
  });
  
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
        <div style={{textAlign:'center'}}>
          {isShow ? <h1>{count}</h1> : null}
          
          <p><button onClick={handleClick}>
            ボタン
          </button></p>
          <p><button onClick={handleDisplay}>{isShow ? '非表示' : '表示'}</button></p>
          <p><input type="text" value={text} onChange={handleChange} /></p>
          <p><button onClick={handleAdd}>追加</button></p>
          <ul>
          {
            array.map(item => {
              return <li key={item}>{item}</li>
            })
          }
          </ul>
        </div>
        </Main>
        <Footer />
      </div>
    </>
  );
}
