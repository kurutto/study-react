import Link from "next/link";
import classes from "./Header.module.css"

export function Header(){
  return (
    <header>
      <ul className={classes.navigation}>
        <li><Link href="/">Index</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </header>
  )
}