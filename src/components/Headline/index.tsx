import { ReactNode } from "react";
import classes from "src/components/Headline/Headline.module.css";

type HeadlineProps = {
  page: string;
  children:ReactNode;
};

export function Headline({ page, children }: HeadlineProps) {
  return (
    <div>
      <h1 className={classes.title}>{page} page</h1>
      <ol>
        <li>
          Get started by editing {children}.
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>
    </div>
  );
}
