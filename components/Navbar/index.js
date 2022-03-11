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
  function changeTheme() {
    if (typeof window != undefined) {
      document.body.classList.toggle("darkTheme");
      const theme = window.localStorage.getItem("KDV_THEME");
      window.localStorage.setItem(
        "KDV_THEME",
        !theme ? "light" : theme === "dark" ? "light" : "dark"
      );
    }
  }
  return (
    <nav className={styles.navbar}>
      {navLinks.map(({ text, link }, idx) => (
        <Link href={link} key={idx}>
          <a className={router.pathname === link ? styles.active : null}>
            {text}
          </a>
        </Link>
      ))}
      <button onClick={changeTheme}>
        <i className="fas fa-moon"></i>
      </button>
    </nav>
  );
}

export default Navbar;
