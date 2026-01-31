import { SchemaMarkup } from "@/lib/seo";

export default function Head() {
  return (
    <>
      <SchemaMarkup />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#0a0a0a" />
    </>
  );
}
