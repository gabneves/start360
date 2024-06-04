import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLeft}>
                    <p><Image
                        src="/assets/icons/cupcake.svg"
                        alt="Facebook"
                        width={14}
                        height={14}
                    />The Unicorn Cake - Todos os direitos reservados &reg; 2024</p>
                </div>
                <div className={styles.footerLinks}>
                    <Link href="/fases-de-desenvolvimento">fases de desenvolvimento</Link>
                    <Link href="/politica-de-privacidade">Política de privacidade</Link>
                    <Link href="/juridico-e-contratos">Jurídico e Contratos</Link>
                </div>
                <div className={styles.footerRight}>
                    <Link href="/">
                        <Image
                            src="/assets/icons/insta.svg"
                            alt="Instagram"
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link href="/">
                        <Image
                            src="/assets/icons/facebook.svg"
                            alt="Facebook"
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link href="/">
                        <Image
                            src="/assets/icons/email.svg"
                            alt="Email"
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link href="/">
                        <Image
                            src="/assets/icons/github.svg"
                            alt="GitHub"
                            width={24}
                            height={24}
                        />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
