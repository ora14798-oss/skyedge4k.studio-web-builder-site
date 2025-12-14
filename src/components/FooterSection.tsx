import {
  Code2,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  MessageCircle,
  Rocket,
  Twitter,
} from "lucide-react";

const FooterSection = () => {
  return (
    <section className="py-32 w-full bg-black text-white relative overflow-hidden">
      {/* Background gradient for premium effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-900 to-black opacity-90"></div>

      <div className="relative container max-w-7xl px-6 mx-auto">
        {/* Footer Grid */}
        <footer className="py-12 border-t border-white/10">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Brand Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-bold tracking-tight">
                  SkyEdge4K.studio
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                We build high-performance, visually stunning websites designed
                to attract, engage, and convert. SEO, marketing, and strategy
                that take your brand to the next level.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    SEO Optimization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Google & Social Ads
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Marketing Strategy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    3D Virtual Tours
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#whatwedo" className="hover:text-white transition">
                    What we do
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-white transition">
                    Review
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/privacy-policy"
                    className="hover:text-white transition"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/cookies" className="hover:text-white transition">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Connect With Us</h4>
              <p className="text-gray-400 mb-4">
                Anaheim California, USA
                <br />
                <a
                  href="tel:+16574528646"
                  className="hover:text-white transition font-semibold"
                >
                  +1 (657) 452-8646
                </a>
                <br />
                <a
                  href="mailto:skyedge4k@gmail.com"
                  className="hover:text-white transition"
                >
                  skyedge4k@gmail.com
                </a>
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/people/SkyEdge4KStudio/61578244506155/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <Facebook size={22} />
                </a>
                <a
                  href="https://www.instagram.com/skyedge4k.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href="https://x.com/skyedge4k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition"
                >
                  <Twitter size={22} />
                </a>
                <a
                  href="https://www.tiktok.com/@skyedge4k.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <Globe size={22} />
                </a>
                <a
                  href="https://wa.me/573001614490"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                >
                  <MessageCircle size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()}{" "}
              <a
                href="https://skyedge4kstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                SkyEdge4K.studio
              </a>
              . All rights reserved.
              <br className="hidden sm:block" />
              Built with strategy, design, and real code ⚡
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { FooterSection };
