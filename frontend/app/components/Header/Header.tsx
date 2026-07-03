import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useLang, type Lang } from "../../hooks/useLang";
import styles from "./Header.module.scss";
import { Button } from "../Button/Button";

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.22 }}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={styles.chevron}
    >
      <path
        d="M2 4L6 8L10 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

const LANGS: { code: Lang; label: string }[] = [{ code: "ru", label: "Русский" }];

export function Header() {
  const { lang, content, setLang, buildHref } = useLang();
  const { components } = content;
  const { nav, startConversation } = components.header;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const langWrapperRef = useRef<HTMLDivElement>(null);

  const mainNavLinks = [
    { label: nav.home, path: "/" },
    { label: nav.portfolio, path: "/portfolio" },
    { label: nav.services, path: "/services" },
  ];

  // Close dropdowns on outside click
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (langWrapperRef.current && !langWrapperRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 1200) setMobileOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className={styles.header} role="banner">
        <nav className={styles.nav} aria-label="Main navigation">
          {mainNavLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={buildHref(path)}
              className={({ isActive }) =>
                [styles.link, isActive ? styles.activeLink : ""].filter(Boolean).join(" ")
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right-side actions */}
        <div className={styles.actions}>
          {/* Language switcher dropdown */}
          {/* <div
            className={styles.langWrapper}
            ref={langWrapperRef}
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <button
              type="button"
              className={[styles.link, styles.langBtn, langOpen ? styles.langBtnOpen : ""]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setLangOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label="Select language"
            >
              {lang.toUpperCase()}
              <ChevronIcon isOpen={langOpen} />
            </button> */}

          {/* <AnimatePresence>
              {langOpen && (
                <motion.div
                  className={styles.langDropdown}
                  initial={{ opacity: 0, y: -8, scaleY: 0.94 }}
                  animate={{ opacity: 1, y: 0, scaleY: 1 }}
                  exit={{ opacity: 0, y: -8, scaleY: 0.94 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  style={{ transformOrigin: "top center" }}
                  role="listbox"
                  aria-label="Language"
                >
                  {LANGS.map(({ code, label }) => (
                    <button
                      key={code}
                      type="button"
                      role="option"
                      aria-selected={lang === code}
                      className={[styles.langOption, lang === code ? styles.langOptionActive : ""]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => {
                        setLang(code);
                        setLangOpen(false);
                      }}
                    >
                      <span className={styles.langOptionCode}>{code.toUpperCase()}</span>
                      <span className={styles.langOptionLabel}>{label.split(" — ")[1]}</span>
                      {lang === code && (
                        <svg
                          className={styles.langCheck}
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M2 7L5.5 10.5L12 4"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>*/}
          {/* </div> */}

          <NavLink to={buildHref("/contact")} className={styles.ctaDesktop}>
            <Button theme="white">{startConversation}</Button>
          </NavLink>

          {/* Burger button */}
          <button
            type="button"
            className={styles.burger}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <motion.span
              className={styles.burgerLine}
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className={styles.burgerLine}
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className={styles.burgerLine}
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            className={styles.mobileMenu}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.33, ease: "easeInOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Mobile menu header row */}
            <div className={styles.mobileMenuTop}>
              <span className={styles.mobileMenuTitle}>{nav.home}</span>
              <button
                type="button"
                className={styles.mobileClose}
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M3 3L17 17M17 3L3 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className={styles.mobileNav}>
              <NavLink
                to={buildHref("/")}
                className={({ isActive }) =>
                  [styles.mobileLink, isActive ? styles.mobileLinkActive : ""]
                    .filter(Boolean)
                    .join(" ")
                }
                end
                onClick={() => setMobileOpen(false)}
              >
                {nav.home}
              </NavLink>

              {mainNavLinks.slice(0, 3).map(({ label, path }) => (
                <NavLink
                  key={path}
                  to={buildHref(path)}
                  className={({ isActive }) =>
                    [styles.mobileLink, isActive ? styles.mobileLinkActive : ""]
                      .filter(Boolean)
                      .join(" ")
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </NavLink>
              ))}

              {mainNavLinks.slice(3).map(({ label, path }) => (
                <NavLink
                  key={path}
                  to={buildHref(path)}
                  className={({ isActive }) =>
                    [styles.mobileLink, isActive ? styles.mobileLinkActive : ""]
                      .filter(Boolean)
                      .join(" ")
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            <div className={styles.mobileFooter}>
              {/* Mobile language switcher */}
              {/*<div className={styles.mobileLangSwitcher}>
                {LANGS.map(({ code, label }) => (
                  <button
                    key={code}
                    type="button"
                    className={[
                      styles.mobileLangOption,
                      lang === code ? styles.mobileLangOptionActive : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => {
                      setLang(code);
                      setMobileOpen(false);
                    }}
                    aria-pressed={lang === code}
                  >
                    <span className={styles.mobileLangCode}>{code.toUpperCase()}</span>
                    <span className={styles.mobileLangName}>{label.split(" — ")[1]}</span>
                    {lang === code && (
                      <svg
                        className={styles.mobileLangCheck}
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 7L5.5 10.5L12 4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div> */}
              <NavLink
                to={buildHref("/contact")}
                onClick={() => setMobileOpen(false)}
                className={styles.mobileCta}
              >
                <Button theme="white">{startConversation}</Button>
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
