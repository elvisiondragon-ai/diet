import { Button } from "@/components/ui/button";
import { Play, Headphones, Sparkles } from "lucide-react";
import { useState } from "react";

const AudioTeaser = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    // Toggle play state
    setIsPlaying(!isPlaying);
    
    // In production, you would actually play the audio file here
    // const audio = new Audio('path-to-your-audio-file.mp3');
    // if (isPlaying) { audio.pause(); } else { audio.play(); }
  };

  return (
    <section className="py-20 bg-[var(--gradient-section)]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Main Audio Card */}
          <div className="bg-card border border-primary/30 rounded-2xl p-8 md:p-12 shadow-[var(--shadow-card)] space-y-6 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full border border-accent/20">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Bonus Eksklusif</span>
              </div>

              {/* Heading */}
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Dengarkan Cuplikan Terapi Bawah Sadar
                </h2>
                <p className="text-lg text-muted-foreground">
                  Rasakan perbedaannya hanya dalam 2 menit. Audio panduan ini akan membantu Anda memprogram ulang otak saat tidur.
                </p>
              </div>

              {/* Audio Player UI */}
              <div className="bg-muted/50 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Button
                    size="lg"
                    onClick={handlePlay}
                    className="w-16 h-16 rounded-full bg-[var(--gradient-hero)] hover:opacity-90 flex items-center justify-center p-0"
                  >
                    <Play className={`w-6 h-6 text-white ${isPlaying ? 'animate-pulse' : ''}`} fill="white" />
                  </Button>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">Sample Terapi - Identitas Ramping</span>
                      <span className="text-muted-foreground">2:15</span>
                    </div>
                    <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                      <div className={`h-full bg-[var(--gradient-hero)] transition-all duration-300 ${isPlaying ? 'w-1/3 animate-pulse' : 'w-0'}`} />
                    </div>
                  </div>
                </div>

                {/* Placeholder for actual audio element */}
                <audio id="teaser-audio" className="hidden">
                  <source src="/path-to-your-audio-file.mp3" type="audio/mpeg" />
                  Browser Anda tidak mendukung audio player.
                </audio>
              </div>

              {/* Benefits */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Teknologi Binaural Beats</h4>
                    <p className="text-sm text-muted-foreground">Frekuensi khusus untuk relaksasi mendalam</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Afirmasi Tertanam</h4>
                    <p className="text-sm text-muted-foreground">Sugesti positif masuk ke bawah sadar</p>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">💡 Tips:</span> Dengarkan dengan headphone di ruangan tenang untuk hasil maksimal. 
                  Ebook lengkap berisi 5+ audio berbeda untuk berbagai skenario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioTeaser;
