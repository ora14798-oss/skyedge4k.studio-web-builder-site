export const metadata = {
  title: "Privacy Policy | SkyEdge4K.Studio",
  description:
    "Learn how SkyEdge4K.Studio protects your data and ensures privacy for our marketing, SEO, and web development clients.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-gray-200 flex flex-col items-center justify-center px-6 py-16 relative">
      {/* Close button */}
      <a
        href="/"
        className="absolute top-6 right-6 text-gray-400 hover:text-white text-2xl font-bold transition"
      >
        ×
      </a>

      <section className="max-w-3xl w-full bg-zinc-900/60 p-8 rounded-2xl shadow-xl border border-zinc-800">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-400 mb-4">
          At <strong>SkyEdge4K.Studio</strong>, we value your privacy and are
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, and safeguard your data when you engage
          with our marketing, SEO, and web development services.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p className="text-gray-400 mb-4">
          We may collect your name, email, phone number, and company details when
          you contact us or use our services. Additionally, analytics tools like
          Google Analytics may collect non-identifiable data to improve our
          website and user experience.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">
          2. How We Use Your Data
        </h2>
        <p className="text-gray-400 mb-4">
          Your information helps us provide services, respond to inquiries,
          improve our marketing strategies, and maintain client communication.
          We do not sell or share your data with third parties for profit.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">
          3. Your Rights
        </h2>
        <p className="text-gray-400 mb-4">
          You have the right to request access, correction, or deletion of your
          personal data. To exercise your rights, contact us at{" "}
          <a
            href="mailto:skyedge4k@gmail.com"
            className="text-blue-400 hover:underline"
          >
            skyedge4k@gmail.com
          </a>
          .
        </p>

        <p className="text-gray-500 mt-8 text-sm text-center">
          Last updated: {new Date().getFullYear()}
        </p>
      </section>
    </main>
  );
}
