export const metadata = {
  title: "Terms of Service | SkyEdge4K.Studio",
  description:
    "Read the terms and conditions for using SkyEdge4K.Studio's marketing, SEO, and web development services.",
};

export default function TermsOfServicePage() {
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
          Terms of Service
        </h1>

        <p className="text-gray-400 mb-4">
          Welcome to <strong>SkyEdge4K.Studio</strong>. By accessing or using
          our website and services, you agree to comply with the following
          terms and conditions.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">
          1. Services
        </h2>
        <p className="text-gray-400 mb-4">
          We provide marketing, SEO, web development, and related digital
          services. Each project is defined by a specific agreement or proposal
          shared with the client.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">
          2. Payments
        </h2>
        <p className="text-gray-400 mb-4">
          Payments must be made according to the terms agreed upon before work
          begins. Late or missed payments may result in project delays or
          termination.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">
          3. Intellectual Property
        </h2>
        <p className="text-gray-400 mb-4">
          Unless otherwise stated, SkyEdge4K.Studio retains ownership of
          original materials, code, and creative assets developed during a
          project until full payment is received.
        </p>

        <h2 className="text-xl font-semibold text-white mt-6 mb-2">
          4. Limitation of Liability
        </h2>
        <p className="text-gray-400 mb-4">
          We are not liable for any indirect or consequential damages resulting
          from the use of our website or services.
        </p>

        <p className="text-gray-500 mt-8 text-sm text-center">
          Last updated: {new Date().getFullYear()}
        </p>
      </section>
    </main>
  );
}
