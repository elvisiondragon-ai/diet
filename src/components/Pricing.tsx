import { Button } from "@/components/ui/button";
import { Check, Clock, Shield, Zap, ArrowRight } from "lucide-react";

const Pricing = () => {
  const features = [
    "5 Bab Komprehensif (120+ halaman)",
    "Audio Terapi Bawah Sadar",
    "Studi Kasus (Timeline lengkap)",
    "Akses Selamanya (Lifetime Access)",
    "Garansi Uang Kembali 30 Hari"
  ];

  const handleCTA = () => {
    window.location.href = 'https://app.elvisiongroup.com/diet';
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full border border-secondary/20">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Penawaran Terbatas</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Investasi untuk
              <span className="text-primary"> Tubuh Ideal</span> Selamanya
            </h2>
          </div>

          {/* Scarcity Alert */}
          <div className="bg-secondary/10 border-2 border-secondary/30 rounded-xl p-4 flex items-center gap-3 max-w-2xl mx-auto">
            <Clock className="w-6 h-6 text-secondary flex-shrink-0" />
            <p className="text-foreground font-medium">
              <span className="text-secondary font-bold">DISKON NOVEMBER:</span> Harga spesial hanya berlaku sampai akhir bulan ini!
            </p>
          </div>

          {/* Pricing Card */}
          <div className="bg-card border-2 border-primary/30 rounded-2xl shadow-[var(--shadow-card)] overflow-hidden max-w-2xl mx-auto">
            {/* Header */}
            <div className="bg-[var(--gradient-hero)] p-8 text-center text-white space-y-4">
              <h3 className="text-2xl font-bold">Paket Lengkap E-book + Audio</h3>
              <div className="space-y-2">
                <div className="text-white/80 text-lg line-through">Rp 300.000</div>
                <div className="text-5xl md:text-6xl font-bold">Rp 100.000</div>
                <div className="text-white/90 text-sm">Hemat 67% - Hanya Bulan Ini</div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Features List */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground text-lg mb-4">Yang Anda Dapatkan:</h4>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="grid md:grid-cols-3 gap-4 py-6 border-t border-border">
                <div className="flex flex-col items-center text-center gap-2">
                  <Shield className="w-8 h-8 text-primary" />
                  <span className="text-sm text-muted-foreground">Pembayaran Aman</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Zap className="w-8 h-8 text-secondary" />
                  <span className="text-sm text-muted-foreground">Akses Instant</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Check className="w-8 h-8 text-accent" />
                  <span className="text-sm text-muted-foreground">Garansi 30 Hari</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={handleCTA}
                  className="w-full bg-[var(--gradient-cta)] hover:opacity-90 shadow-[var(--shadow-cta)] text-lg py-6 group"
                >
                  Ya, Saya Mau Langsing Tanpa Penderitaan!
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  onClick={handleCTA}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md text-lg py-6 group"
                >
                  Checkout
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Guarantee */}
              <div className="bg-muted/50 rounded-xl p-4 text-center">
                <p className="text-sm text-foreground">
                  <strong className="text-primary">💯 Garansi 100% Bebas Risiko:</strong>
                  {" "}Jika dalam 30 hari Anda merasa metode ini tidak berguna setelah melakukan, 
                  kami kembalikan uang Anda tanpa pertanyaan.
                </p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center space-y-3">
            <div className="flex justify-center items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold border-2 border-background"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-muted-foreground text-sm">+237 pembeli bulan ini</span>
            </div>
            <p className="text-sm text-muted-foreground">
              ⭐️ 4.9/5.0 dari 189 review
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
