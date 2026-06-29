import { PlaceholderPage } from "../pages/PlaceholderPage";

export function meta() {
  return [{ title: "О нас | Thrones Systems" }];
}

export default function About() {
  return (
    <PlaceholderPage
      eyebrow="Команда"
      title="О нас"
      description="Здесь будет рассказ о подходе, экспертизе и принципах Thrones Systems."
    />
  );
}
