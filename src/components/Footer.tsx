import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Shield } from "lucide-react";

const Footer = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Final CTA Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Siap Mengubah Hidup Anda?
            </h2>
            <p className="text-lg text-background/80">
              Bergabunglah dengan ratusan orang yang sudah menemukan kebebasan dari diet yoyo
            </p>
            <Button 
              size="lg" 
              onClick={scrollToPricing}
              className="bg-[var(--gradient-cta)] hover:opacity-90 shadow-[var(--shadow-cta)] text-lg px-8 py-6 group"
            >
              Mulai Transformasi Sekarang
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-background/60 pt-2">
              🔒 Pembayaran aman • Akses instant • Garansi 30 hari
            </p>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Langsing Tanpa Penderitaan</h3>
            <p className="text-sm text-background/70 leading-relaxed">
              Metode Abundance Mental - Mengubah identitas, mengubah tubuh. 
              Berbasis neurosains dan psikologi transformasi.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-background/90">Informasi</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#pricing" className="hover:text-background transition-colors">
                  Harga & Paket
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-background transition-colors">
                  Tentang Metode
                </a>
              </li>
              <li>
                <a href="mailto:support@langsing-abundance.com" className="hover:text-background transition-colors">
                  Kontak Support
                </a>
              </li>
              <li>
                <button className="hover:text-background transition-colors text-left">
                  Syarat & Ketentuan
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-semibold text-background/90">Kontak</h4>
            <div className="space-y-3">
              <a 
                href="mailto:support@langsing-abundance.com"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@langsing-abundance.com
              </a>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <Shield className="w-4 h-4" />
                Pembayaran Aman & Terpercaya
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-sm text-background/60">
            © 2024 Langsing Tanpa Penderitaan. Hak Cipta Dilindungi.
          </p>
          <p className="text-xs text-background/50 mt-2">
            Hasil individual dapat bervariasi. Produk ini bukan pengganti konsultasi medis profesional.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
