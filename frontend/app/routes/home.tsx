import type { Route } from "./+types/home";
import { content_ru } from "../constants/content_ru";
import { BASE_URL } from "~/settings";
import { HomePage } from "~/pages/HomePage/HomePage";

export function meta({ location }: Route.MetaArgs) {
  const lang =
    new URL(location.pathname + location.search, BASE_URL).searchParams.get("lang") === "ru"
      ? "ru"
      : "ru";
  const { pages } = lang === "ru" ? content_ru : content_ru;
  const { home } = pages;
  return [
    { title: home.meta.title },
    { name: "description", content: home.meta.description },
  ];
}
export default function Home() {
  return <HomePage />;
}
