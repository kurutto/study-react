import classes from "src/components/Main/Main.module.css";
import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";
import { ReactNode } from "react";
type MainProps = {
  page: string;
  children?:ReactNode
};
export function Main({ page,children }: MainProps) {
  return (
    <main className={classes.main}>
      <Headline page={page}>
        <code>pages/{page}.tsx</code>
      </Headline>
      <Links />
      {children}
    </main>
  );
}
