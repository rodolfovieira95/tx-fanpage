import { NextRequest, NextResponse } from "next/server";

const locales = ["en-US", "nl-NL", "pt-BR", "es-ES", "de-DE"];
const defaultLocale = "en-US";

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return defaultLocale;

  const preferredLocale = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim())
    .find((lang) => locales.includes(lang));

  return preferredLocale || defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Não redirecionar para rotas de API ou arquivos estáticos
  if (
    pathname.startsWith("/api") ||
    pathname.match(/\.(jpg|png|gif|css|js)$/)
  ) {
    return;
  }

  // Verificar se o pathname já inclui um locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirecionar se não houver locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
