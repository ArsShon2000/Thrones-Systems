import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { Intro } from "~/components/Intro/Intro";
import { useLang } from "~/hooks/useLang";
import styles from "./ServicesPage.module.scss";
import services_1 from "../../assets/images/services_1.png";
import services_2 from "../../assets/images/services_2.png";
import services_3 from "../../assets/images/services_3.png";
import services_4 from "../../assets/images/services_4.png";
import { BottomSection } from "~/components/BottomSection/BottomSection";

const SERVICE_IMAGES = [services_1, services_2, services_3, services_4];

export function ServicesPage() {
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
  const servicesContent = content.pages.services.content;
  const frontendServices = servicesContent.cards.map((service, index) => ({
    id: index + 1,
    title: service.title,
    description: service.description,
    image: SERVICE_IMAGES[index],
  }));

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
    <main className={styles.servicesPage}>
      <Intro title={servicesContent.intro.title} subtitle={servicesContent.intro.subtitle} />

      <motion.section
        id="services"
        className={styles.services}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.servicesWrapper}>
          <h2 className={styles.servicesTitle}>{servicesContent.section.title}</h2>
          <p className={styles.servicesText}>{servicesContent.section.text}</p>

          <div className={styles.servicesCarouselHead}>
            <h3 className={styles.servicesSubtitle}>{servicesContent.section.subtitle}</h3>
            <div className={styles.servicesNavigation}>
              <button
                className={styles.navBtn}

                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canScrollPrev}
                aria-label={servicesContent.section.navigation.prev}
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
                    fill="#121212"
                  />
                </svg>
              </button>
              <button
                className={styles.navBtn}
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canScrollNext}
                aria-label={servicesContent.section.navigation.next}
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
                    fill="#121212"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.servicesCarouselViewport} ref={emblaRef}>
            <div
              className={styles.servicesList}
              aria-label={servicesContent.section.carouselAriaLabel}
              role="list"
            >
              {frontendServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className={styles.serviceSlide}
                  role="listitem"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8, scale: 1.01 }}
                >
                  <div className={styles.serviceCard}>
                    <img src={service.image} alt={service.title} className={styles.serviceImage} />
                    <h4 className={styles.serviceTitle}>{service.title}</h4>
                    <p className={styles.serviceDescription}>{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <BottomSection
        title={servicesContent.backendSection.title}
        subtitle={servicesContent.backendSection.subtitle}
        items={servicesContent.backendSection.items}
      />
    </main>
  );
}
