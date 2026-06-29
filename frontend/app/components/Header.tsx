import { NavLink } from "react-router";

const navigation = [
  { to: "/", label: "Главная" },
  { to: "/our-work", label: "Наша работа" },
  { to: "/customers", label: "Наши заказчики" },
  { to: "/about", label: "О нас" },
];

export function Header() {
  return (
    <header className="siteHeader">
      <div className="siteHeader__inner section">
        <NavLink to="/" className="siteHeader__brand" aria-label="Thrones Systems">
          <span className="siteHeader__logo">TS</span>
          <span>Thrones Systems</span>
        </NavLink>

        <nav className="siteHeader__nav" aria-label="Основная навигация">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `siteHeader__link${isActive ? " siteHeader__link_active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
