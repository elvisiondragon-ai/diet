import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Apakah metode ini cocok untuk saya yang sudah mencoba banyak diet gagal?",
      answer: "Justru metode ini dirancang untuk Anda! Jika diet konvensional gagal, itu bukan karena Anda lemah, tapi karena metodanya melawan cara kerja otak. Metode Abundance Mental fokus pada reprogramming mental, bukan 'menahan lapar' - jadi tidak ada efek yoyo lagi."
    },
    {
      question: "Berapa lama saya akan melihat hasil?",
      answer: "Setiap orang berbeda, tapi sebagian besar pengguna melaporkan perubahan mindset dalam 2-3 minggu pertama (lebih tenang, tidak crave makanan), dan penurunan berat terlihat di bulan ke-2. Anna dalam studi kasus turun 18 kg dalam 8 bulan secara konsisten tanpa yoyo."
    },
    {
      question: "Apakah saya harus mendengarkan audio setiap hari?",
      answer: "Untuk hasil optimal, dengarkan audio 3-5x seminggu saat tidur atau meditasi. Kuncinya adalah konsistensi, bukan intensitas. Audio dirancang agar bisa didengar sambil tidur (menanam sugesti ke bawah sadar)."
    },
    {
      question: "Apakah ini termasuk program diet atau menu makanan?",
      answer: "Bukan. Ini adalah metode reprogramming mental. Kami tidak memberikan menu diet, karena filosofi kami adalah 'Intuitive Eating' - makan apa yang tubuh minta, tapi dari identitas mental yang sudah diubah. Anda akan secara alami memilih makanan sehat."
    },
    {
      question: "Bagaimana cara mengakses e-book setelah pembelian?",
      answer: "Setelah pembayaran berhasil, Anda akan langsung menerima email berisi link download e-book (PDF) dan semua file audio (MP3). Akses selamanya, bisa diunduh ke perangkat apa pun."
    },
    {
      question: "Apakah ada syarat khusus? Usia? Kondisi kesehatan?",
      answer: "Metode ini aman untuk semua usia (18+). Namun jika Anda memiliki kondisi medis khusus (diabetes, gangguan makan, dll), harap konsultasi dengan dokter Anda sebelum memulai program perubahan berat badan apa pun."
    },
    {
      question: "Bagaimana jika saya tidak puas?",
      answer: "Kami memberikan garansi uang kembali 30 hari tanpa pertanyaan. Jika Anda merasa metode ini tidak cocok, cukup kirim email dan kami proses refund 100%."
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Pertanyaan Umum</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Masih Ada <span className="text-primary">Pertanyaan?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Berikut jawaban untuk pertanyaan yang sering diajukan
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary font-semibold py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact Support */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center space-y-3">
            <p className="text-foreground font-medium">
              Pertanyaan lain? Hubungi kami:
            </p>
            <a 
              href="mailto:support@elvisiongroup.com" 
              className="text-primary hover:underline font-semibold"
            >
              support@elvisiongroup.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
