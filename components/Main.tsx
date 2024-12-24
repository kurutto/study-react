import classes from "./Main.module.css";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
type MainProps = {
  page: string;
};
export function Main({ page }: MainProps) {
  return (
    <main className={classes.main}>
      <Headline page={page}>
        <code>pages/{page}.tsx</code>
      </Headline>
      <Links />
    </main>
  );
}
