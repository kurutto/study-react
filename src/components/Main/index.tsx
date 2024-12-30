import classes from "src/components/Main/Main.module.css";
import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";
import { ReactNode } from "react";
import { useCallback, useState } from "react";
import Image from "next/image";
const ITEMS = [
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: (
      <>
        <Image
          className={classes.logo}
          src="/vercel.svg"
          alt="Vercel logomark"
          width={20}
          height={20}
        />
        Deploy now
      </>
    ),
    class: 'primary',
    target: "_blank",
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: <>Read our docs</>,
    class: 'secondary',
    target: "_blank",
  },
];
type MainProps = {
  page: string;
  children?:ReactNode
};
export const Main = (props: MainProps) => {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems(prevItems => prevItems.slice(0,prevItems.length-1));
  },[])
  return (
    <main className={classes.main}>
      <Headline page={props.page} handleReduce={handleReduce}>
        <code>{items.length}</code>
      </Headline>
      <Links items={items} />
      {props.children}
    </main>
  );
}
