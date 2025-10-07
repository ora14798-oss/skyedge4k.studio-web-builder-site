import {MapPin, Phone, Mail} from "lucide-react";
import ContactForm from "./contact-form";

export function CTASectionForm() {
  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden scroll-mt-20"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dqksqtluq/image/upload/v1755977342/Flat_Vector_Logo_for_Design_Studio_zvog8h.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.35)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-sky-900/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Brand with SkyEdge4K Studio?
            </h2>

            <p className="text-lg text-white/90 mb-6">
              SkyEdge4K Studio, based in Colombia, blends creativity,
              technology, and strategy to help businesses grow and stand out in
              competitive markets. We specialize in{" "}
              <strong>social media management</strong>,{" "}
              <strong>content creation</strong>, <strong>SEO</strong>,{" "}
              <strong>web development</strong>,{" "}
              <strong>marketing strategy</strong>,{" "}
              <strong>paid advertising</strong>, and{" "}
              <strong>3D virtual tours</strong> for real estate and construction
              projects.
            </p>

            <ul className="space-y-3 mb-6 text-white/90">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>
                  Engaging social media campaigns designed to attract and
                  convert
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>
                  High-quality content creation that delivers maximum impact
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>
                  SEO and web development that drive visibility and results
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>
                  Tailored marketing strategies aligned with your business goals
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Fast and professional delivery with full support</span>
              </li>
            </ul>

            <div className="space-y-2 text-white/90 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <a
                  href="https://www.google.com/maps/search/Cartagena+de+Indias,+Colombia+-+Marbella"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  Cartagena de Indias, Colombia – Marbella
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href="https://wa.me/573001614490"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  +57 300 161 4490
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:skyedge4k@gmail.com"
                  className="hover:underline transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  skyedge4k@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
