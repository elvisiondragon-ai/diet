import { Brain, Heart, Lightbulb, Sparkles } from "lucide-react";

const Solution = () => {
  const principles = [
    {
      icon: Brain,
      title: "Berat Badan = Identitas Mental",
      description: "Tubuh Anda hanyalah cerminan dari identitas bawah sadar. Ubah 'cetak biru mental', tubuh akan mengikuti secara otomatis."
    },
    {
      icon: Lightbulb,
      title: "Gelombang Otak Alpha/Theta",
      description: "Gunakan neurosains untuk menanam sugesti positif saat otak paling reseptif (meditasi & tidur)."
    },
    {
      icon: Heart,
      title: "Joyful Movement, Bukan Siksaan",
      description: "Gerak yang menyenangkan mengaktifkan dopamin (hormon bahagia), bukan kortisol (hormon stress)."
    }
  ];

  return (
    <section id="solution" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Solusi Revolusioner</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Metode <span className="bg-clip-text text-transparent bg-[var(--gradient-hero)]">Abundance Mental</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bukan lagi tentang membatasi. Ini tentang <span className="font-semibold text-primary">memprogram ulang identitas</span> Anda menjadi orang yang secara natural ramping dan sehat.
            </p>
          </div>

          {/* Main Concept */}
          <div className="bg-card border border-primary/20 rounded-2xl p-8 shadow-[var(--shadow-card)] space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-[var(--gradient-hero)] rounded-xl flex items-center justify-center flex-shrink-0">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground">Konsep Inti: "Mental Mirror"</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Tubuh adalah cerminan mental. Orang ramping bukan karena mereka 'berjuang keras', 
                  tapi karena identitas bawah sadar mereka adalah <span className="font-semibold text-primary">"Saya adalah orang yang sehat dan ideal"</span>. 
                  Ebook ini mengajarkan cara mengubah identitas itu.
                </p>
              </div>
            </div>
          </div>

          {/* Principles Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 space-y-4 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <principle.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>

          {/* Method Highlight */}
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-foreground text-center">
              The Abundance Release Method™
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-accent">
                  1
                </div>
                <h4 className="font-semibold text-foreground">Visualisasi Intens</h4>
                <p className="text-sm text-muted-foreground">Bayangkan diri ideal dengan detail sensori</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-primary">
                  2
                </div>
                <h4 className="font-semibold text-foreground">Letting Go</h4>
                <p className="text-sm text-muted-foreground">Lepaskan keinginan memaksa (paradoks manifestasi)</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-secondary">
                  3
                </div>
                <h4 className="font-semibold text-foreground">Feeling it Real</h4>
                <p className="text-sm text-muted-foreground">Rasakan emosi sudah mencapai tubuh ideal</p>
              </div>
            </div>
          </div>
          
          {/* Audio Sample */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Sample Diet afirmasi</h3>
            <audio controls autoPlay>
              <source src="https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/diet/samplediet.MP3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
