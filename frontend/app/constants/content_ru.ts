export const content_ru = {
  pages: {
    home: {
      meta: {
        title: "О нас | Arta",
        description: "Разработка веб-сервисов под ключ",
      },
    },
    services: {
      meta: {
        title: "Услуги | Arta",
        description: "Описание услуг компании Arta",
      },
    },
    portfolio: {
      meta: {
        title: "Портфолио | Arta",
        description: "Описание портфолио компании Arta",
      },
    },
  },
  components: {
    footer: {},

    header: {
      startConversation: "Стать клиентом",
      nav: {
        home: "О нас",
        services: "Услуги",
        portfolio: "Наши работы",
      },
    },
  },
};

export type ContentType = typeof content_ru;
