import type { Route } from "./+types/portfolio";
import { content_ru } from "../constants/content_ru";
import { BASE_URL } from "~/settings";
import { PortfolioPage } from "~/pages/PortfolioPage/PortfolioPage";

export function meta({ location }: Route.MetaArgs) {
  const lang =
    new URL(location.pathname + location.search, BASE_URL).searchParams.get("lang") === "ru"
      ? "ru"
      : "ru";
  const { pages } = lang === "ru" ? content_ru : content_ru;
  const { portfolio } = pages;
  return [
    { title: portfolio.meta.title },
    { name: "description", content: portfolio.meta.description },
  ];
}
export default function Portfolio() {
  return <PortfolioPage />;
}
