import {Button} from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="w-full">
      <div className="relative flex w-full items-center justify-center bg-[url('https://res.cloudinary.com/dqksqtluq/image/upload/v1759705000/skyedge-bg-cta.webp')] bg-cover bg-center py-20 md:py-32 text-center md:p-24 overflow-hidden">
        {/* 🎥 Background Video */}
        <video
          src="https://res.cloudinary.com/dqksqtluq/video/upload/v1759720395/sakura-with-full-moon.3840x2160_am5dmn.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Text Content */}
        <div className="relative z-20 w-full px-6">
          <h1 className="mb-6 text-balance text-white text-3xl font-bold md:text-5xl leading-tight">
            Let’s build a website that works as hard as you do
          </h1>

          <p className="text-white/90 font-medium md:text-lg max-w-2xl mx-auto">
            SkyEdge4K.studio creates fully coded, high-performance websites
            optimized for SEO, speed, and conversions. No templates. Just
            results.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              variant="default"
              className="bg-white text-black hover:bg-blue-400/90 transition"
            >
              <a href={"#contact"}>Get Your Free Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export {CTASection};
