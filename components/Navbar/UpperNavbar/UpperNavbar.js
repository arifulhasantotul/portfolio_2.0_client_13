import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import { useStateContext } from "@/context/ContextProvider";
import logo from "../../../public/logo.jpg";
import routes from "../../../routes/routes";

import DashboardIcon from "@/components/Icons/DashboardIcon";
import styles from "@/styles/UpperNavbar.module.css";
import { usePathname } from "next/navigation";

const UpperNavbar = () => {
  const { currentColor, darkTheme } = useStateContext();
  const pathname = usePathname();

  // css conditionalMode for dark mode
  const conditionalMode = darkTheme ? styles.dark : styles.light;

  return (
    <div className={`${conditionalMode} ${styles.nav_sec}`}>
      <Container maxWidth="xl">
        <div className={styles.nav_wrapper}>
          <div className={styles.nav_brand}>
            <Image src={logo} alt="logo" layout="fill" objectFit="cover" />
          </div>

          <div className={`${styles.nav_links}`}>
            <Link href="/dashboard">
              <span
                className={
                  pathname.includes("/dashboard")
                    ? styles.activeLink
                    : styles.link
                }
                style={{
                  color: pathname.includes("/dashboard") ? currentColor : "",
                  fill: pathname.includes("/dashboard") ? currentColor : "",
                }}
                title={`Go to: /dashboard`}
              >
                <span title="Dashboard" className={styles.link_icon}>
                  <DashboardIcon />
                </span>
                <span className={styles.link_name}>Dashboard</span>
              </span>
            </Link>
            {routes.map((path, idx) => (
              <Link key={idx} href={path.to}>
                <span
                  className={
                    pathname === path.to ? styles.activeLink : styles.link
                  }
                  style={{
                    color: pathname === path.to ? currentColor : "",
                    fill: pathname === path.to ? currentColor : "",
                  }}
                  title={`Go to: ${path.to}`}
                >
                  <span title={path.name} className={styles.link_icon}>
                    {path.icon}
                  </span>
                  <span className={styles.link_name}>{path.name}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpperNavbar;
