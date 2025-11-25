import { Quote, Star, TrendingUp, Heart } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">Kisah Sukses Nyata</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Transformasi <span className="text-secondary">Anna</span>
            </h2>
          </div>

          {/* Main Testimonial Card */}
          <div className="bg-card border border-border rounded-2xl shadow-[var(--shadow-card)] overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-6 md:p-8 border-b border-border">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Avatar */}
                <div className="w-24 h-24 bg-[var(--gradient-hero)] rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                  A
                </div>
                
                {/* Info */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Anna Wijaya</h3>
                  <p className="text-muted-foreground">Wanita Karier, 35 Tahun, Ibu 2 Anak</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Quote */}
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-12 h-12 text-primary/20" />
                <blockquote className="text-lg text-foreground leading-relaxed pl-8 italic">
                  "Saya sudah mencoba semua diet: Keto, Intermittent Fasting, bahkan Weight Watchers. 
                  Selalu turun 5-7 kg dalam 2 bulan, tapi naik lagi 10 kg dalam 6 bulan. 
                  Siklus yoyo ini membuat saya frustrasi dan kehilangan kepercayaan diri di kantor."
                </blockquote>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-border">
                <div className="text-center space-y-1">
                  <div className="text-3xl font-bold text-secondary">-18kg</div>
                  <div className="text-sm text-muted-foreground">Berat Turun</div>
                </div>
                <div className="text-center space-y-1">
                  <div className="text-3xl font-bold text-primary">8 Bulan</div>
                  <div className="text-sm text-muted-foreground">Durasi</div>
                </div>
                <div className="text-center space-y-1">
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">Konsisten</div>
                </div>
              </div>

              {/* Story */}
              <div className="space-y-4 text-foreground">
                <p className="leading-relaxed">
                  <strong className="text-primary">The Turning Point:</strong> Setelah menggunakan Metode Abundance Mental, 
                  Anna menyadari masalah sebenarnya bukan soal makanan, tapi identitas mentalnya yang masih 
                  "wanita yang harus berjuang keras untuk langsing."
                </p>
                
                <p className="leading-relaxed">
                  Dengan audio terapi bawah sadar yang dilakukan setiap malam sebelum tidur, 
                  Anna mulai menanam sugesti baru: <em className="text-primary">"Saya adalah wanita yang secara natural sehat dan ideal."</em>
                </p>

                <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4 space-y-2">
                  <p className="font-semibold text-foreground flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                    Hasil di Luar Ekspektasi
                  </p>
                  <p className="text-sm leading-relaxed">
                    Dalam 3 bulan pertama, Anna turun 8 kg tanpa merasa menyiksa diri. 
                    Yang lebih mengejutkan: ia mulai menikmati jalan pagi (dulu dibenci) dan 
                    otomatis memilih makanan sehat tanpa "menahan diri."
                  </p>
                </div>

                <div className="bg-secondary/5 border-l-4 border-secondary rounded-r-lg p-4 space-y-2">
                  <p className="font-semibold text-foreground flex items-center gap-2">
                    <Heart className="w-5 h-5 text-secondary" />
                    Bonus Tak Terduga
                  </p>
                  <p className="text-sm leading-relaxed">
                    Confidence baru Anna membawa dampak ke karier: 
                    Ia mendapat promosi menjadi Senior Manager karena auranya yang berbeda. 
                    "Ketika Anda mencintai tubuh Anda, orang lain merasakan energi itu," ujar Anna.
                  </p>
                </div>
              </div>

              {/* Final Quote */}
              <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl p-6">
                <p className="text-lg text-foreground italic text-center">
                  "Buku ini bukan hanya mengubah berat badan saya. Ia mengubah seluruh hidup saya. 
                  Sekarang saya tahu: <span className="font-bold text-primary not-italic">Langsing bukan tujuan, tapi efek samping dari mindset yang benar.</span>"
                </p>
                <p className="text-center text-sm text-muted-foreground mt-3">— Anna Wijaya</p>
              </div>

              {/* Video Testimony */}
              <div className="mt-8 text-center">
                <video 
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" 
                  src="https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/diet/diet1.mp4" 
                  controls 
                  loop 
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Trust Element */}
          <div className="text-center text-sm text-muted-foreground">
            <p>* Hasil individual dapat bervariasi. Anna mengikuti metode secara konsisten selama 8 bulan.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
