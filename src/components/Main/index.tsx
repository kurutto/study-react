import classes from "src/components/Main/Main.module.css";
import { Links } from "src/components/Links";
import { Headline } from "src/components/Headline";
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
