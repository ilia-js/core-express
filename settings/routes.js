export const ROUTES = {
  ROOT: "/",
  FAVICON: "/favicon.ico",
  AUTH_WITH_ONE_TIME_TOKEN: "/auth-with-one-time-token",
  TELEGRAM_WEBHOOK: `/telegram-web-hook/${process.env.TELEGRAM_WEBHOOK_SECRET}`,
  APPOINTMENT: "/appointment",
  APPOINTMENT_RESULT: "/appointment_result",
  APPOINTMENTS: "/appointments",
  CUSTOMERS: "/customers",
  CUSTOMER: "/customer",
  HI: "/hi",
  CATEGORY: "/category",
};

export const ROUTES_WITHOUT_AUTHORIZATION = [
  ROUTES.ROOT,
  ROUTES.FAVICON,
  ROUTES.AUTH_WITH_ONE_TIME_TOKEN,
  ROUTES.TELEGRAM_WEBHOOK,
];
