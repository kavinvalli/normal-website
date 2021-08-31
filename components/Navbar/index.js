import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import styles from "./Navbar.module.scss";

function Navbar() {
  const router = useRouter();
  const navLinks = [
    { text: "Home", link: "/" },
    { text: "Projects", link: "/projects" },
    { text: "Contact", link: "/contact" },
  ];
  return (
    <nav className={styles.navbar}>
      {navLinks.map(({ text, link }, idx) => (
        <Link href={link} key={idx}>
          <a className={router.pathname === link ? styles.active : null}>
            {text}
          </a>
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
