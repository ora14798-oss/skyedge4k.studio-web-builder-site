"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const MainFeatureSection = () => {
  return (
    <section
      id="whatwedo"
      className="bg-gradient-to-br from-primary text-white to-red-400 -500 relative w-screen overflow-hidden pb-0"
    >
      {/* 🔹 Thin top bar with infinite moving text */}
      <div className="relative bg-[#1f171f] overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee text-sm font-medium text-white py-2 tracking-wide">
          <div className="flex shrink-0">
            <span className="mx-8">
              Web Development with Real Code | No Monthly Platform Fees
            </span>
            <span className="mx-8">
              Custom Websites that Load Fast and Rank Higher
            </span>
            <span className="mx-8">SEO Strategies Built from the Code Up</span>
            <span className="mx-8">
              Google Ads Campaigns Focused on Measurable Growth
            </span>
            <span className="mx-8">
              Professional Web Design for Businesses That Want Results
            </span>
            <span className="mx-8">
              No WordPress or Shopify | 100% Custom-Built Solutions
            </span>
            <span className="mx-8">Pay Once | Own Your Website Forever</span>
            <span className="mx-8">
              Performance, Security, and SEO in Every Line of Code
            </span>
            <span className="mx-8">
              Boost Visibility and Attract Real Clients
            </span>
            <span className="mx-8">
              Smart Google Ads That Convert Visitors into Leads
            </span>
            <span className="mx-8">
              Websites Coded for Speed, Precision, and Scalability
            </span>
            <span className="mx-8">
              SkyEdge4K.studio | Building Digital Success with Code
            </span>
          </div>

          {/* Duplicate for seamless scrolling */}
          <div className="flex shrink-0">
            <span className="mx-8">
              Web Development with Real Code | No Monthly Platform Fees
            </span>
            <span className="mx-8">
              Custom Websites that Load Fast and Rank Higher
            </span>
            <span className="mx-8">SEO Strategies Built from the Code Up</span>
            <span className="mx-8">
              Google Ads Campaigns Focused on Measurable Growth
            </span>
            <span className="mx-8">
              Professional Web Design for Businesses That Want Results
            </span>
            <span className="mx-8">
              No WordPress or Shopify | 100% Custom-Built Solutions
            </span>
            <span className="mx-8">Pay Once | Own Your Website Forever</span>
            <span className="mx-8">
              Performance, Security, and SEO in Every Line of Code
            </span>
            <span className="mx-8">
              Boost Visibility and Attract Real Clients
            </span>
            <span className="mx-8">
              Smart Google Ads That Convert Visitors into Leads
            </span>
            <span className="mx-8">
              Websites Coded for Speed, Precision, and Scalability
            </span>
            <span className="mx-8">
              SkyEdge4K.studio | Building Digital Success with Code
            </span>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            display: flex;
            width: 200%;
            animation: marquee 70s linear infinite;
          }
        `}</style>
      </div>

      {/* Features Section */}
      <div className="bg-white text-foreground py-15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              WHAT WE DO BEST?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              SkyEdge4K.studio builds websites and marketing systems that bring
              real clients, not just clicks. We combine professional coding, SEO
              strategy, and Google Ads management to help your business stand
              out and grow efficiently.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {/* Custom Web Development */}
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                      />
                    </svg>
                  </div>
                  Custom Web Development
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  We design and build websites using real code for full freedom
                  and fast performance. No WordPress or Shopify — just custom,
                  scalable, high-performance sites.
                </dd>
              </div>

              {/* SEO */}
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>
                  SEO Optimization
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  We optimize your website from its core structure to improve
                  visibility and ranking on Google.
                </dd>
              </div>

              {/* Ads */}
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </div>
                  Google Ads Campaigns
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  Smart, ROI-focused Google Ads campaigns built to convert.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
       {/* ⭐ NEW FEATURED VIDEO SECTION */}
      <div className="w-full bg-black py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Featured Project Video
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            A showcase of our web development project, UI/UX, and creative
            direction crafted for performance and visual impact.
          </p>

          {/* Video with safe responsive ratio */}
          <AspectRatio ratio={16 / 9}>
            <video
              src="https://res.cloudinary.com/dtza2wtax/video/upload/v1764394277/Sequence_01_2_gbwq2z.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl w-full h-full object-cover shadow-xl"
            />
          </AspectRatio>
        </div>
      </div>

      {/* Portfolio Image Grid */}
      <div className="relative w-full bg-gradient-to-b from-black to-gray-900 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Images */}
            {/* (unchanged — keeping your portfolio grid intact) */}
            {[
              "v1764280443/creat_a_phot_of_a_home_page_of_a_website_for_car_rental_company_wlnpzx.jpg",
              "v1764280200/Screenshot_2025-09-02_122800_sofmhz.png",
              "v1764280202/Screenshot_2025-09-02_121055_pptpsn.png",
              "v1764280201/Screenshot_2025-09-02_120816_makgy8.png",
              "v1764280197/Screenshot_2025-10-05_214037_dffjny.png",
              "v1764280196/Screenshot_2025-10-05_214309_x4kgfz.png",
              "v1764280195/Screenshot_2025-10-05_214130_vpsdg9.png",
              "v1764281752/create_a_phot_of_a_home_page_of_a_website_for_lip-gloss_product_phg7uk.jpg",
              "v1764280195/Screenshot_2025-10-05_214218_gtm16t.png",
            ].map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl shadow-lg group"
              >
                <img
                  src={`https://res.cloudinary.com/dtza2wtax/image/upload/${img}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

     

      {/* CTA Section */}
      <div className="relative bg-primary py-16 sm:py-24 overflow-hidden">
        <video
          src="https://res.cloudinary.com/dtza2wtax/video/upload/v1764280473/itachi-shillouette-in-front-of-the-red-moon.3840x2160_rb24gp.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute right-(-8) top-0 h-full w-full object-cover opacity-100"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              READY TO GROW YOUR BUSINESS ONLINE?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
              Partner with SkyEdge4K.studio for a fully coded website, optimized
              SEO, and smart Google Ads campaigns built for results.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                asChild
                className="h-fit bg-white text-foreground rounded-full px-8 py-4 text-lg font-semibold hover:bg-gray-200 shadow-sm"
              >
                <a href="#contact">Start Your Project</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { MainFeatureSection };
