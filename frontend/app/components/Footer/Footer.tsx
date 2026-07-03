import { useLang } from "~/hooks/useLang";
import styles from "./Footer.module.scss";

export function Footer() {
  const { content, buildHref } = useLang();
  const { footer } = content.components;

  return <footer className={styles.footer}></footer>;
}
