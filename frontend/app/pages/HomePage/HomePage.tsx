import { motion } from "framer-motion";
import styles from "./HomePage.module.scss";
import industryArrow from "../../assets/icons/arrow.svg";
import showcaseImage from "../../assets/home_1.png";
import serviceImageLeft from "../../assets/home_2.png";
import serviceImageRight from "../../assets/home_3.png";
import { Intro } from "~/components/Intro/Intro";
import { useLang } from "~/hooks/useLang";
import { BottomSection } from "~/components/BottomSection/BottomSection";
import { useContactModal } from "~/hooks/useContactModal";

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className={[styles.marqueeRow, reverse ? styles.marqueeRowReverse : ""].join(" ")}
      aria-hidden="true"
    />
  );
}

export function HomePage() {
  const { content } = useLang();
  const { openModal } = useContactModal();
  const home = content.pages.home.content;
  return (
    <main className={styles.page}>
      <Intro title={home.hero.title} subtitle={home.hero.subtitle} />

      <motion.section
        className={styles.statsSection}
        aria-labelledby="company-platform-title"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.stats} aria-label={home.labels.stats}>
          {home.stats.map(({ value, label }) => (
            <article key={label} className={styles.stat}>
              <div className={styles.statValue}>{value}</div>
              <p className={styles.statLabel}>{label}</p>
            </article>
          ))}
        </div>

        <div className={styles.about}>
          <h2 id="company-platform-title" className={styles.aboutTitle}>
            {home.about.title}
          </h2>

          <p className={styles.aboutText}>{home.about.text}</p>
        </div>
      </motion.section>

      <motion.section
        className={styles.featuresSection}
        aria-labelledby="features-title"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`${styles.lineWrapper} ${styles.lineWrapperMobile} `} aria-hidden="true">
          <span className={styles.line}></span>

          {home.features.cards.map((card, index) => (
            <>
              <div
                key={card.number}
                className={[styles.featureMarker, styles[`featureMarker${index + 1}`]].join(" ")}
                aria-hidden="true"
              >
                {card.number}
              </div>
            </>
          ))}
        </div>
        <div className={styles.featuresShell}>
          {home.features.cards.slice(0, 1).map((card) => (
            <article key={card.number} className={styles.featureCard}>
              <h3 className={styles.featureTitle}>{card.title}</h3>
              <p className={styles.featureText}>{card.description}</p>
            </article>
          ))}

          <div className={`${styles.lineWrapper} ${styles.lineWrapperPC} `} aria-hidden="true">
            <span className={styles.line}></span>

            {home.features.cards.map((card, index) => (
              <>
                <div
                  key={card.number}
                  className={[styles.featureMarker, styles[`featureMarker${index + 1}`]].join(" ")}
                  aria-hidden="true"
                >
                  {card.number}
                </div>
              </>
            ))}
          </div>
          <div className={styles.featureCardCol}>
            {home.features.cards.slice(1, 3).map((card) => (
              <article key={card.number} className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{card.title}</h3>
                <p className={styles.featureText}>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <div className={styles.servicesBg}>
        <motion.section
          className={styles.showcaseSection}
          aria-labelledby="showcase-title"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.showcaseInner}>
            <h2 id="showcase-title" className={styles.showcaseTitle}>
              {home.showcase.titleLines[0]}
              <br />
              {home.showcase.titleLines[1]}
            </h2>

            <img
              className={styles.showcaseImage}
              src={showcaseImage}
              alt={home.showcase.imageAlt}
              width={1643}
              height={764}
              loading="lazy"
            />
          </div>
        </motion.section>

        <motion.section
          className={styles.servicesSection}
          aria-labelledby="services-title"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.servicesInner}>
            <h2 id="services-title" className={styles.servicesTitle}>
              {home.services.title}
            </h2>

            <div className={styles.servicesGrid}>
              <article className={styles.serviceCard}>
                <img
                  className={styles.serviceImage}
                  src={serviceImageLeft}
                  alt={home.services.cards[0].imageAlt}
                  width={1643}
                  height={764}
                  loading="lazy"
                />

                <h3 className={styles.serviceTitle}>{home.services.cards[0].title}</h3>
                <p className={styles.serviceText}>{home.services.cards[0].description}</p>
              </article>

              <article className={styles.serviceCard}>
                <img
                  className={styles.serviceImage}
                  src={serviceImageRight}
                  alt={home.services.cards[1].imageAlt}
                  width={1643}
                  height={764}
                  loading="lazy"
                />

                <h3 className={styles.serviceTitle}>{home.services.cards[1].title}</h3>
                <p className={styles.serviceText}>{home.services.cards[1].description}</p>
              </article>
            </div>
          </div>
        </motion.section>

        <motion.section
          className={styles.marqueeSection}
          aria-labelledby="marquee-title"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.marqueeTop}>
            <MarqueeRow />
          </div>

          <div className={styles.marqueeBottom}>
            <MarqueeRow reverse />
          </div>

          <div className={styles.marqueeInner}>
            <div className={styles.marqueeContent}>
              <h2 id="marquee-title" className={styles.marqueeText}>
                {home.marquee.text}
              </h2>

              <button type="button" className={styles.marqueeCta} onClick={openModal}>
                {home.marquee.cta}
              </button>
            </div>
          </div>
        </motion.section>
      </div>
      <motion.section
        className={styles.industriesSection}
        aria-labelledby="industries-title"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.industriesHeader}>
          <h2 id="industries-title" className={styles.industriesTitle}>
            {home.industries.titleLines[0]}
            <br />
            {home.industries.titleLines[1]}
          </h2>

          <span className={styles.industriesProjectsLabel}>{home.industries.projectsLabel}</span>
        </div>

        <div className={styles.industriesBody}>
          <div className={styles.industriesAside} aria-hidden="true" />

          <div className={styles.industriesContent}>
            <div className={styles.industriesContentHeader}>
              <span className={styles.industriesEyebrow}>{home.industries.eyebrow}</span>

              <h3 className={styles.industriesSubtitle}>{home.industries.subtitle}</h3>
            </div>
            <div className={styles.industriesGrid}>
              <div className={styles.industriesGridCol}>
                {home.industries.cards.slice(0, 2).map((card, index) => (
                  <article
                    key={card.title}
                    className={[
                      styles.industryCard,
                      index % 2 === 0 ? styles.industryCardLeft : styles.industryCardRight,
                    ].join(" ")}
                  >
                    <div className={styles.industryCardHeader}>
                      <h4 className={styles.industryCardTitle}>{card.title}</h4>
                      <img
                        className={styles.industryCardArrowIcon}
                        src={industryArrow}
                        alt="Arrow"
                        aria-hidden="true"
                      />
                    </div>

                    <div className={styles.industryCardLine} aria-hidden="true" />

                    <p className={styles.industryCardText}>{card.description}</p>
                  </article>
                ))}
              </div>

              <div className={styles.industriesGridCol}>
                {home.industries.cards.slice(2, 4).map((card, index) => (
                  <article
                    key={card.title}
                    className={[
                      styles.industryCard,
                      index % 2 === 0 ? styles.industryCardLeft : styles.industryCardRight,
                    ].join(" ")}
                  >
                    <div className={styles.industryCardHeader}>
                      <h4 className={styles.industryCardTitle}>{card.title}</h4>
                      <img
                        className={styles.industryCardArrowIcon}
                        src={industryArrow}
                        alt="Arrow"
                        aria-hidden="true"
                      />
                    </div>

                    <div className={styles.industryCardLine} aria-hidden="true" />

                    <p className={styles.industryCardText}>{card.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <BottomSection
        title={home.products.title}
        subtitle={home.products.text}
        items={home.caseStudy.items}
      />
    </main>
  );
}
