import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-10" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full border border-accent/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Metode Revolusioner Berbasis Neurosains</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-foreground">Langsing Tanpa</span>
            <br />
            <span className="bg-clip-text text-transparent bg-[var(--gradient-hero)]">
              Penderitaan
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Mengubah Pikiran, Mengubah Tubuh dengan <span className="font-semibold text-primary">Metode Abundance Mental</span>
          </p>

          {/* Pain Point */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-[var(--shadow-card)] max-w-2xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed">
              Bosan dengan diet yoyo? Lelah menahan lapar dan olahraga siksaan yang tidak bertahan lama?
              <span className="font-semibold text-primary"> Saatnya mengubah permainan.</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              onClick={scrollToPricing}
              className="bg-[var(--gradient-cta)] hover:opacity-90 shadow-[var(--shadow-cta)] text-lg px-8 py-6 group"
            >
              Dapatkan Sekarang - Rp 100.000
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" })}
              className="text-lg px-8 py-6"
            >
              Pelajari Metodenya
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="text-sm text-muted-foreground pt-4">
            🔒 100% Aman • Akses Instant • Garansi Uang Kembali
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
