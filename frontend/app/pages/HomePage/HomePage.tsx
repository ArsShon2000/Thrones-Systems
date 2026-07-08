import styles from "./HomePage.module.scss";
import { content_ru } from "../../constants/content_ru";
import heroScrollIcon from "../../assets/icons/icon_2.svg";
import industryArrow from "../../assets/icons/arrow.svg";
import projectVector from "../../assets/Vector.png";
import showcaseImage from "../../assets/home_1.png";
import serviceImageLeft from "../../assets/home_2.png";
import serviceImageRight from "../../assets/home_3.png";
import scrollImageTop from "../../assets/scroll_1.png";
import scrollImageBottom from "../../assets/scroll_2.png";

function MarqueeRow({
  image,
  alt,
  reverse = false,
}: {
  image: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <div className={styles.marqueeRow} aria-hidden="true">
      <div
        className={[
          styles.marqueeTrack,
          reverse ? styles.marqueeTrackReverse : "",
        ].join(" ")}
      >
        <img className={styles.marqueeImage} src={image} alt={alt} />
        <img className={styles.marqueeImage} src={image} alt="" />
      </div>
    </div>
  );
}

const home = content_ru.pages.home.content;

export function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.background} aria-hidden="true" />

        <h1 id="home-title" className={styles.title}>
          {home.hero.title}
        </h1>

        <p className={styles.subtitle}>{home.hero.subtitle}</p>

        <a className={styles.button} href="#footer" aria-label={home.hero.buttonLabel}>
          <img
            className={styles.buttonIcon}
            src={heroScrollIcon}
            alt=""
            aria-hidden="true"
          />
        </a>
      </section>

      <section className={styles.statsSection} aria-labelledby="company-platform-title">
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
            {home.about.titleLines[0]}
            <br />
            {home.about.titleLines[1]}
          </h2>

          <p className={styles.aboutText}>{home.about.text}</p>
        </div>
      </section>

      <section className={styles.featuresSection} aria-labelledby="features-title">
        <h2 id="features-title" className={styles.visuallyHidden}>
          {home.labels.features}
        </h2>

        <div className={styles.featuresShell}>
          <div className={styles.featuresRail} aria-hidden="true" />

          {home.features.cards.map((card, index) => (
            <div
              key={card.number}
              className={[
                styles.featureMarker,
                styles[`featureMarker${index + 1}`],
              ].join(" ")}
              aria-hidden="true"
            >
              {card.number}
            </div>
          ))}

          {home.features.cards.map((card) => (
            <article
              key={card.number}
              className={[
                styles.featureCard,
                styles[`featureCard${card.side === "left" ? "Left" : "Right"}`],
                styles[`featureCard${card.align[0].toUpperCase()}${card.align.slice(1)}`],
              ].join(" ")}
            >
              <h3 className={styles.featureTitle}>{card.title}</h3>
              <p className={styles.featureText}>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.showcaseSection} aria-labelledby="showcase-title">
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
      </section>

      <section className={styles.servicesSection} aria-labelledby="services-title">
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
      </section>

      <section className={styles.marqueeSection} aria-labelledby="marquee-title">
        <div className={styles.marqueeInner}>
          <div className={styles.marqueeTop}>
            <MarqueeRow image={scrollImageTop} alt={home.marquee.topAlt} />
          </div>

          <div className={styles.marqueeBottom}>
            <MarqueeRow
              image={scrollImageBottom}
              alt={home.marquee.bottomAlt}
              reverse
            />
          </div>

          <div className={styles.marqueeContent}>
            <h2 id="marquee-title" className={styles.marqueeText}>
              {home.marquee.text}
            </h2>

            <button type="button" className={styles.marqueeCta}>
              {home.marquee.cta}
            </button>
          </div>
        </div>
      </section>

      <section className={styles.industriesSection} aria-labelledby="industries-title">
        <div className={styles.industriesInner}>
          <div className={styles.industriesHeader}>
            <h2 id="industries-title" className={styles.industriesTitle}>
              {home.industries.titleLines[0]}
              <br />
              {home.industries.titleLines[1]}
            </h2>

            <div className={styles.industriesProjects}>
              <span className={styles.industriesProjectsLabel}>
                {home.industries.projectsLabel}
              </span>
            </div>
          </div>

          <div className={styles.industriesDivider} aria-hidden="true" />

          <div className={styles.industriesBody}>
            <div className={styles.industriesAside} aria-hidden="true" />

            <div className={styles.industriesContent}>
              <span className={styles.industriesEyebrow}>{home.industries.eyebrow}</span>

              <h3 className={styles.industriesSubtitle}>{home.industries.subtitle}</h3>

              <div className={styles.industriesGrid}>
                {home.industries.cards.map((card, index) => (
                  <article
                    key={card.title}
                    className={[
                      styles.industryCard,
                      index % 2 === 0
                        ? styles.industryCardLeft
                        : styles.industryCardRight,
                    ].join(" ")}
                  >
                    <div className={styles.industryCardHeader}>
                      <h4 className={styles.industryCardTitle}>{card.title}</h4>
                      <img
                        className={styles.industryCardArrowIcon}
                        src={industryArrow}
                        alt=""
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
      </section>

      <section className={styles.productsSection} aria-labelledby="products-title">
        <div className={styles.productsInner}>
          <div className={styles.productsContent}>
            <h2 id="products-title" className={styles.productsTitle}>
              {home.products.titleLines[0]}
            </h2>

            <p className={styles.productsText}>{home.products.text}</p>
          </div>

          <img
            className={styles.productsVector}
            src={projectVector}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        </div>
      </section>

      <section className={styles.caseStudySection} aria-labelledby="case-study-title">
        <div className={styles.caseStudyInner}>
          <h2 id="case-study-title" className={styles.visuallyHidden}>
            {home.labels.caseStudy}
          </h2>

          <div className={styles.caseStudyList}>
            {home.caseStudy.items.map((item, index) => (
              <article key={item.number} className={styles.caseStudyRow}>
                <div className={styles.caseStudyNumber}>{item.number}</div>
                <h3 className={styles.caseStudyTitle}>{item.title}</h3>
                <p className={styles.caseStudyText}>{item.description}</p>

                {index < home.caseStudy.items.length - 1 ? (
                  <div className={styles.caseStudyDivider} aria-hidden="true" />
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
