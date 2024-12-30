import Link from "next/link";
import classes from "src/components/Header/Header.module.css";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
];
export const Header = () => {
  return (
    <header>
      <ul className={classes.navigation}>
        {NAV_ITEMS.map((item) => {
          return (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
