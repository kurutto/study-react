import { ReactNode } from "react";
import classes from "src/components/Headline/Headline.module.css";

type HeadlineProps = {
  page: string;
  handleReduce:() => void;
  children:ReactNode;
};

export const Headline = ({ page, handleReduce, children }: HeadlineProps) => {
  return (
    <div>
      <h1 className={classes.title}>{page} page</h1>
      <ol>
        <li>
          アイテムの数は{children}個です。
          <button onClick={handleReduce}>減らす</button>
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>
    </div>
  );
}
