import { motion, useScroll, useTransform } from "framer-motion";

const capabilities = [
  "Web-платформы",
  "Личные кабинеты",
  "B2B-автоматизация",
  "Дизайн-системы",
];

const process = [
  {
    value: "01",
    title: "Стратегия",
    text: "Собираем цели, ограничения и сценарии, чтобы интерфейс помогал бизнесу, а не просто был красивым.",
  },
  {
    value: "02",
    title: "Прототип",
    text: "Прорабатываем структуру, движение, состояния и ключевые экраны до разработки.",
  },
  {
    value: "03",
    title: "Запуск",
    text: "Собираем frontend, интеграции и систему компонентов с учетом дальнейшего роста продукта.",
  },
];

export function MainPage() {
  const { scrollYProgress } = useScroll();
  const heroZ = useTransform(scrollYProgress, [0, 0.32], [0, 260]);
  const heroRotate = useTransform(scrollYProgress, [0, 0.32], [0, -14]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.2]);
  const textZ = useTransform(scrollYProgress, [0.12, 0.48], [-120, 120]);
  const textRotate = useTransform(scrollYProgress, [0.12, 0.48], [8, -5]);

  return (
    <main className="mainPage">
      <section className="hero section">
        <motion.div
          className="hero__content"
          style={{ z: textZ, rotateX: textRotate }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="eyebrow">Цифровые системы нового уровня</span>
          <h1>
            Создаем сайты и платформы с ощущением глубины, скорости и точной
            инженерии.
          </h1>
          <p>
            Thrones Systems соединяет продуктовый дизайн, frontend-разработку и
            интерактивные 3D-паттерны, чтобы бренд запоминался с первого
            скролла.
          </p>
          <div className="hero__actions">
            <a className="button button_primary" href="#approach">
              Посмотреть подход
            </a>
            <a className="button button_secondary" href="/our-work">
              Наша работа
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__stage"
          style={{ z: heroZ, rotateY: heroRotate, opacity: heroOpacity }}
        >
          <div className="orbit orbit_one" />
          <div className="orbit orbit_two" />
          <div className="coreCube">
            <span className="coreCube__face coreCube__face_front" />
            <span className="coreCube__face coreCube__face_back" />
            <span className="coreCube__face coreCube__face_right" />
            <span className="coreCube__face coreCube__face_left" />
            <span className="coreCube__face coreCube__face_top" />
            <span className="coreCube__face coreCube__face_bottom" />
          </div>
          <div className="floatingPanel floatingPanel_one">AI Ops</div>
          <div className="floatingPanel floatingPanel_two">UX Core</div>
          <div className="floatingPanel floatingPanel_three">API Grid</div>
        </motion.div>
      </section>

      <section className="capabilities section" aria-label="Направления">
        {capabilities.map((item, index) => (
          <motion.article
            className="capability"
            key={item}
            initial={{ opacity: 0, y: 40, rotateX: 18 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
          >
            <span>0{index + 1}</span>
            <h2>{item}</h2>
          </motion.article>
        ))}
      </section>

      <section className="depthStory section" id="approach">
        <motion.div
          className="depthStory__visual"
          initial={{ opacity: 0, z: -180, rotateY: -22 }}
          whileInView={{ opacity: 1, z: 80, rotateY: 0 }}
          viewport={{ amount: 0.45 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="layerCard layerCard_back">Research</div>
          <div className="layerCard layerCard_middle">Design</div>
          <div className="layerCard layerCard_front">Launch</div>
        </motion.div>

        <motion.div
          className="depthStory__text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9 }}
        >
          <span className="eyebrow">Скролл как пространство</span>
          <h2>Слои интерфейса реагируют на движение пользователя.</h2>
          <p>
            Мы используем CSS 3D и Framer Motion: блоки появляются из глубины,
            карточки смещаются по Z-оси, а ключевые элементы двигаются как
            отдельные планы сцены.
          </p>
        </motion.div>
      </section>

      <section className="process section">
        <div className="process__heading">
          <span className="eyebrow">Как работаем</span>
          <h2>От идеи до живого продукта.</h2>
        </div>
        <div className="process__grid">
          {process.map((item) => (
            <motion.article
              className="processCard"
              key={item.value}
              initial={{ opacity: 0, y: 36, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <span>{item.value}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
