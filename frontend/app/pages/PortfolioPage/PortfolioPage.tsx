import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { Intro } from "~/components/Intro/Intro";
import { useLang } from "~/hooks/useLang";
import styles from "./PortfolioPage.module.scss";
import projectBuildova from "../../assets/images/project_1.png";
import projectTarot from "../../assets/images/project_2.png";
import projectCrypto from "../../assets/images/project_3.png";
import projectConsulting from "../../assets/images/project_4.png";

const PROJECT_IMAGES = [projectBuildova, projectTarot, projectCrypto, projectConsulting];

export function PortfolioPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    loop: false,
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const { content } = useLang();
  const portfolioContent = content.pages.portfolio.content;
  const projects = portfolioContent.projects.map((project, index) => ({
    ...project,
    id: index + 1,
    image: PROJECT_IMAGES[index],
  }));
  const reviews = portfolioContent.reviews.items;

  useEffect(() => {
    if (!emblaApi) return;

    const updateButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi]);

  return (
    <main className={styles.portfolioPage}>
      <Intro title={portfolioContent.intro.title} subtitle={portfolioContent.intro.subtitle} />

      <motion.section
        id="portfolio"
        className={styles.portfolio}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.portfolioWrapper}>
          <div className={styles.portfolioHeader}>
            <h2 className={styles.portfolioTitle}>
              {portfolioContent.heading.titleLines[0]}
              <br /> {portfolioContent.heading.titleLines[1]}
            </h2>
            <p className={styles.portfolioSubtitle}>{portfolioContent.heading.subtitle}</p>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                className={`${styles.projectCard} ${i % 2 === 0 ? styles.even : styles.odd}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.01 }}
              >
                <div
                  className={`${styles.projectContent} ${i % 2 !== 0 && styles.projectContentText}`}
                >
                  <h3 className={styles.projectTitle}>
                    <span>{project.title}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      className={styles.arrow}
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.5858 7H4.41421V3H26.4142V25H22.4142V9.82843L5.82843 26.4142L3 23.5858L19.5858 7Z"
                        fill="#121212"
                      />
                    </svg>
                  </h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                </div>
                <div className={styles.projectContent}>
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="reviews"
        className={styles.reviews}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.reviewsWrapper}>
          <div className={styles.reviewsHeader}>
            <h2 className={styles.reviewsTitle}>
              {portfolioContent.reviews.titleLines[0]} <br />{" "}
              {portfolioContent.reviews.titleLines[1]}
            </h2>

            <div className={styles.reviewsNavigation}>
              <button
                className={styles.navBtn}
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canScrollPrev}
                aria-label={portfolioContent.reviews.navigation.prev}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.4548 25.3002H28.1436V29.7002H3.9436V5.50019H8.3436V22.1889L26.5879 3.94457L29.6992 7.05581L11.4548 25.3002Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button
                className={styles.navBtn}
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canScrollNext}
                aria-label={portfolioContent.reviews.navigation.next}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.5452 7.6998H4.85641V3.2998H29.0564V27.4998H24.6564V10.8111L6.41205 29.0554L3.30078 25.9442L21.5452 7.6998Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.topReviewWrapper}>
            <div className={styles.topReview}>
              <p className={styles.topReviewTitle}>
                <svg
                  width="38"
                  height="28"
                  viewBox="0 0 38 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9602 0.560115C15.2802 0.160115 13.3602 0.000112534 11.5202 0.000112534C3.60023 0.000112534 0.000234544 3.68011 0.000234544 9.84011V27.6001H15.6802V11.6801H8.72023V10.2401C8.72023 8.24012 9.44023 7.76011 12.2402 7.76011C13.2802 7.76011 14.4802 7.92012 15.8402 8.08011L16.9602 0.560115ZM37.6802 0.560115C36.0802 0.160115 34.1602 0.000112534 32.3202 0.000112534C24.4002 0.000112534 20.8002 3.68011 20.8002 9.84011V27.6001H36.4002V11.6801H29.5202V10.2401C29.5202 8.24012 30.2402 7.76011 32.9602 7.76011C34.0802 7.76011 35.2802 7.92012 36.6402 8.08011L37.6802 0.560115Z"
                    fill="white"
                  />
                </svg>

                <span>{portfolioContent.reviews.topReview.title}</span>
              </p>

              <p className={styles.topReviewText}>{portfolioContent.reviews.topReview.text}</p>

              <div className={styles.topReviewAuthor}>
                <div className={styles.topReviewImage}></div>
                <div>
                  <p className={styles.topReviewName}>
                    {portfolioContent.reviews.topReview.author}
                  </p>
                  <p className={styles.topReviewDate}>{portfolioContent.reviews.topReview.date}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.reviewCarouselViewport} ref={emblaRef}>
            <div
              className={styles.reviewCarousel}
              aria-label={portfolioContent.reviews.carouselAriaLabel}
              role="list"
            >
              {reviews.map((review) => (
                <div key={review.id} className={styles.reviewSlide} role="listitem">
                  <div className={styles.reviewCard}>
                    <span className={styles.reviewRating}>{review.rating}</span>

                    <div>
                      <p className={styles.reviewText}>{review.text}</p>

                      <div>
                        <p className={styles.reviewName}>{review.author}</p>
                        <p className={styles.reviewDate}>{review.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
