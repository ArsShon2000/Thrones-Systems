import type { Route } from "./+types/home";
import { MainPage } from "../pages/MainPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Thrones Systems | Инженерия цифровых систем" },
    {
      name: "description",
      content:
        "Thrones Systems создает современные цифровые платформы, интерфейсы и автоматизацию для бизнеса.",
    },
  ];
}

export default function Home() {
  return <MainPage />;
}
