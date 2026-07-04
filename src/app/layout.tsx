// Minimal root layout kept at `src/app`.
import "./globals.css";
import { Heebo } from "next/font/google";
import { getLocale } from "next-intl/server";

// Hebrew has no glyphs in Geist, so Hebrew text was silently falling back to a
// thinner system font (mismatched weight/size vs. English/Spanish). Heebo covers
// Hebrew + Latin across the same weight range and is scoped to the "he" locale below.
const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const dir = locale === "he" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body className={heebo.variable}>
        {children}
      </body>
    </html>
  );
}
