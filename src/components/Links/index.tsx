import Link from "next/link";
import classes from "src/components/Links/Links.module.css";
import { ItemsType } from "src/components/Main/ItemsType";

type LinksProps = {
  items:ItemsType[];
}

export function Links({items}:LinksProps) {
  
  return (
    <div>
      <ul className={classes.ctas}>
        {items.map(item => (
          <li key={item.href}>
            <Link
              className={`${classes[item.class]}`}
              href={item.href}
              target={item.target ? item.target : ""}
              rel={item.target === "_blank" ? "noopener noreferrer" : ""}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
