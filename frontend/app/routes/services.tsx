import type { Route } from "./+types/services";
import { content_ru } from "../constants/content_ru";
import { BASE_URL } from "~/settings";
import { ServicesPage } from "~/pages/ServicesPage/ServicesPage";

export function meta({ location }: Route.MetaArgs) {
  const lang =
    new URL(location.pathname + location.search, BASE_URL).searchParams.get("lang") === "ru"
      ? "ru"
      : "ru";
  const { pages } = lang === "ru" ? content_ru : content_ru;
  const { services } = pages;
  return [
    { title: services.meta.title },
    { name: "description", content: services.meta.description },
  ];
}

export default function Services() {
  return <ServicesPage />;
}
