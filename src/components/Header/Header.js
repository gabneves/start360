// components/Header.js
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.navLinks}>
                    <li><Link href="#">início</Link></li>
                    <li><Link href="#">projeto</Link></li>
                    <li><Link href="#">equipe</Link></li>
                    <li><Link href="#">contato</Link></li>
                </ul>
                <div className={styles.flag}>
                    <Image src="/assets/icons/flagBrazil.svg" alt="Bandeira do Brasil" width={17} height={17} />
                </div>
                <div className={styles.logo}>
                    <Image src="/assets/img/logo.svg" alt="Logo" width={150} height={50} />
                </div>
            </nav>
        </header>
    );
}
