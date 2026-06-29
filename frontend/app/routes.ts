import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("our-work", "routes/our-work.tsx"),
  route("customers", "routes/customers.tsx"),
  route("about", "routes/about.tsx"),
] satisfies RouteConfig;
