import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Header.module.css"; // Import the CSS module for styling the header

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={100} height={50} />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/stories">Stories</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.rightNav}>
        <Link href="/login">Login</Link>
        <Link href="/cart">
          <Image src="/cart-icon.png" alt="Cart" width={24} height={24} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
