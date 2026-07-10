import { motion } from "framer-motion";
import styles from "./Intro.module.scss";
import { ClickMeBtn } from "../ClickMeBtn/ClickMeBtn";

export function Intro({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section id="intro" className={styles.intro}>
      <motion.div
        className={styles.introWrapper}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          {title}
        </motion.h1>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
        >
          <p className={styles.subtitle}>{subtitle}</p>

          <motion.div whileHover={{ scale: 1.03, y: -4 }} whileTap={{ scale: 0.98 }}>
            <ClickMeBtn className={styles.clickMeBtn} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
