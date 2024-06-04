
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.navLinks}>
                    <li><Link href="/">início</Link></li>
                    <li><Link href="/projeto">projeto</Link></li>
                    <li><Link href="/equipe">equipe</Link></li>
                    <li><Link href="/contato">contato</Link></li>
                </ul>
                <div className={styles.flag}>
                    <Image src="/assets/icons/flagBrazil.svg" alt="Bandeira do Brasil" width={17} height={17} className={styles.icon} />
                    <Image src="/assets/icons/flagUSA.svg" alt="Bandeira dos Estados Unidos" width={17} height={17}  className={styles.icon}/>
                    <Image src="/assets/icons/flagSpain.svg" alt="Bandeira da Espanha" width={17} height={17}  className={styles.icon}/>
                </div>
                <div className={styles.logo}>
                    <Image src="/assets/img/logo.svg" alt="Logo" width={150} height={50} />
                </div>
            </nav>
        </header>
    );
}
