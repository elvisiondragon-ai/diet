import { AlertCircle, TrendingDown, Frown, RotateCcw } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Diet Konvensional Memicu Hormon Lapar",
      description: "Menahan lapar meningkatkan hormon Ghrelin dan Kortisol, membuat tubuh menimbun lemak sebagai respons bertahan hidup."
    },
    {
      icon: Frown,
      title: "The Cursed Pressure",
      description: "Melawan keinginan menciptakan tekanan psikologis yang justru membuat Anda semakin ingin makan. Ini bukan soal kemauan, tapi sistem yang salah."
    },
    {
      icon: RotateCcw,
      title: "Yoyo Effect yang Mematahkan Semangat",
      description: "Turun 5 kg, naik 7 kg. Siklus ini merusak metabolisme dan kepercayaan diri Anda."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Kenapa Diet Selalu Gagal?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Masalah Sebenarnya Bukan di
              <span className="text-primary"> Tubuh Anda</span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Penelitian neurosains membuktikan: 95% diet konvensional gagal dalam 2 tahun. Bukan karena Anda lemah, tapi karena metodenya melawan cara kerja otak manusia.
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 space-y-4 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6">
            <p className="text-lg text-foreground font-medium">
              Teori <span className="text-primary font-bold">"Reaktansi Psikologis"</span> menjelaskan: 
              Semakin Anda memaksa diri, semakin besar perlawanan internal. 
              Inilah sebabnya diet ketat selalu berakhir dengan "cheat day" yang tidak terkendali.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
