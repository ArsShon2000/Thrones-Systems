import { PlaceholderPage } from "../pages/PlaceholderPage";

export function meta() {
  return [{ title: "Наши заказчики | Thrones Systems" }];
}

export default function Customers() {
  return (
    <PlaceholderPage
      eyebrow="Клиенты"
      title="Наши заказчики"
      description="Раздел готовится: добавим отрасли, партнеров и результаты совместной работы."
    />
  );
}
