import styles from "@/styles/Home.module.css";
import { ReactNode } from "react";

type HeadlineProps = {
  page: string;
  children:ReactNode;
};

export function Headline({ page, children }: HeadlineProps) {
  return (
    <div>
      <h1 className={styles.title}>{page} page</h1>
      <ol>
        <li>
          Get started by editing {children}.
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>
    </div>
  );
}
