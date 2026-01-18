import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./routes/layouts/LandingLayout.tsx", [index("routes/Home.tsx")]),
  layout("./routes/auth/AuthLayout.tsx", [
    route("login", "./routes/auth/LoginPage.tsx"),
    route("register", "./routes/auth/RegisterPage.tsx"),
  ]),
  layout("./routes/layouts/AppLayout.tsx", [
    route("dashboard", "./routes/dashboard/DashboardIndex.tsx"),
  ]),
] satisfies RouteConfig;
