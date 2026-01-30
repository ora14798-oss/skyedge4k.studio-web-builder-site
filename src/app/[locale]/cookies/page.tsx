export const metadata = {
  title: "Cookie Policy | SkyEdge4K.Studio",
  description:
    "Understand how SkyEdge4K.Studio uses cookies to enhance user experience and website performance.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-gray-200 flex flex-col items-center justify-center px-6 py-16 relative">
      <a
        href="/"
        className="absolute top-6 right-6 text-gray-400 hover:text-white text-2xl font-bold transition"
      >
        ×
      </a>

      <section className="max-w-3xl w-full bg-zinc-900/60 p-8 rounded-2xl shadow-xl border border-zinc-800">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Cookie Policy
        </h1>

        <p className="text-gray-400 mb-4">
          <strong>SkyEdge4K.Studio</strong> uses cookies to improve website
          functionality, analyze traffic, and enhance user experience. This
          policy explains how and why cookies are used.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">
          1. What Are Cookies?
        </h2>
        <p className="text-gray-400 mb-4">
          Cookies are small text files stored on your device to help websites
          recognize you and remember preferences for future visits.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">
          2. How We Use Cookies
        </h2>
        <p className="text-gray-400 mb-4">
          We use cookies to:
          <ul className="list-disc pl-6 mt-2">
            <li>Analyze website traffic and improve performance.</li>
            <li>Understand user behavior for marketing optimization.</li>
            <li>Save preferences for language or layout.</li>
          </ul>
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">
          3. Managing Cookies
        </h2>
        <p className="text-gray-400 mb-4">
          You can manage or disable cookies in your browser settings. Note that
          disabling cookies may affect some website functionalities.
        </p>

        <p className="text-gray-500 mt-8 text-sm text-center">
          Last updated: {new Date().getFullYear()}
        </p>
      </section>
    </main>
  );
}
