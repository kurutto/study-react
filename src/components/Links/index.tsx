import Link from "next/link";
import Image from "next/image";
import classes from "src/components/Links/Links.module.css";

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
    class: classes.primary,
    target: "_blank",
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: <>Read our docs</>,
    class: classes.secondary,
    target: "_blank",
  },
];

export function Links() {
  return (
    <ul className={classes.ctas}>
      {ITEMS.map(item => (
        <li key={item.href}>
          <Link
            className={item.class}
            href={item.href}
            target={item.target ? item.target : ""}
            rel={item.target === "_blank" ? "noopener noreferrer" : ""}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
