import styles from "@/styles/Home.module.css";

type HeadlineProps = {
  page: string;
};

export function Headline({ page }: HeadlineProps) {
  return (
    <div>
      <h1 className={styles.title}>{page} page</h1>
      <ol>
        <li>
          Get started by editing <code>pages/{page}.tsx</code>.
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>
    </div>
  );
}
