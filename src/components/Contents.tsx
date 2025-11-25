import { BookOpen, Brain, Sparkles, Dumbbell, Target, Award } from "lucide-react";

const Contents = () => {
  const chapters = [
    {
      icon: Sparkles,
      number: "BAB 1",
      title: "Cheat Code & Jalan Pintas Sugesti",
      description: "Rahasia programmer pikiran untuk memotong proses bertahun-tahun menjadi beberapa minggu. Teknik sugesti yang digunakan oleh atlet olimpiade.",
      highlights: ["Teknik auto-sugesti cepat", "Script afirmasi ready-to-use", "Timing optimal untuk reprogramming"]
    },
    {
      icon: Brain,
      number: "BAB 2",
      title: "The Mental Mirror - Mengubah Identitas",
      description: "Pelajari cara kerja identitas bawah sadar dan bagaimana tubuh Anda adalah cerminan langsung dari self-image internal Anda.",
      highlights: ["Konsep 'Set Point' berat badan", "Cara mengubah cetak biru mental", "Latihan visualisasi identity shift"]
    },
    {
      icon: Target,
      number: "BAB 3",
      title: "The Abundance Release Method™",
      description: "Teknik 3 langkah revolusioner: Bayangkan → Lepaskan → Rasakan. Metode ini menggabungkan neurosains dengan prinsip manifestasi modern.",
      highlights: ["Panduan step-by-step harian", "Waktu terbaik praktik (Alpha/Theta state)", "Common mistakes & cara menghindarinya"]
    },
    {
      icon: Dumbbell,
      number: "BAB 4",
      title: "Joyful Movement - Gerak Tanpa Paksaan",
      description: "Lupakan gym menyiksa. Temukan gerakan yang Anda nikmati dan aktifkan 'Abundance Loop' - semakin enjoy, semakin konsisten, semakin langsing.",
      highlights: ["Intuitive Eating principles", "Gerakan yang melepas dopamin", "Menghindari over-exercise trap"]
    },
    {
      icon: Award,
      number: "BAB 5",
      title: "Konsistensi Permanen & Kisah Sukses Anna",
      description: "Studi kasus nyata: Bagaimana Anna (35 tahun, ibu 2 anak) turun 18 kg tanpa diet ketat dan malah mendapat promosi jabatan berkat confidence baru.",
      highlights: ["Anna's transformation timeline", "Strategi anti-sabotase diri", "Maintenance jangka panjang"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Isi Lengkap E-book</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Apa yang Akan Anda
              <span className="text-primary"> Pelajari?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              5 Bab komprehensif dengan total 120+ halaman praktis, dilengkapi audio panduan dan worksheet.
            </p>
          </div>

          {/* Chapters List */}
          <div className="space-y-6">
            {chapters.map((chapter, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 hover:shadow-[var(--shadow-card)] transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon & Number */}
                  <div className="flex items-start gap-4 md:flex-col md:items-center md:min-w-[100px]">
                    <div className="w-14 h-14 bg-[var(--gradient-hero)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <chapter.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-primary md:text-center">{chapter.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {chapter.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {chapter.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 pt-2">
                      {chapter.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bonus Section */}
          <div className="bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/30 rounded-2xl p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Bonus Eksklusif</h3>
            </div>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">+</span>
                <span><strong>5 Audio Terapi</strong> untuk berbagai skenario (tidur, meditasi, workout)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">+</span>
                <span><strong>Worksheet PDF</strong> untuk tracking progress dan journaling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">+</span>
                <span><strong>Quick Reference Guide</strong> - Cheat sheet 1 halaman untuk akses cepat</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contents;
