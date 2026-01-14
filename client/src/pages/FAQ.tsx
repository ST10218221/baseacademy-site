import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Do I need my own bass guitar?",
      answer: "Ideally, yes. Having your own instrument allows you to practice between lessons, which is crucial for progress. However, I have spare high-quality instruments available at the studio for your first few lessons if you are just trying it out."
    },
    {
      question: "What is your cancellation policy?",
      answer: "I operate a strict 24-hour cancellation policy. Lessons cancelled with less than 24 hours' notice will be charged at the full rate. This ensures I can manage my schedule efficiently for all students."
    },
    {
      question: "How often should I have lessons?",
      answer: "For most students, weekly lessons provide the best momentum. Intermediate to advanced players might prefer fortnightly sessions to allow more time for deep practice on complex topics."
    },
    {
      question: "Do you teach plectrum (pick) style?",
      answer: "Absolutely. Being a well-rounded player means being comfortable with fingers, pick, and slap techniques. We will cover all approaches depending on the style of music you wish to play."
    },
    {
      question: "Do you offer grades?",
      answer: "Yes, I can guide students through Rockschool and Trinity Rock & Pop grade exams (Grades 1-8). We have a 100% pass rate, with the majority of students achieving Merit or Distinction."
    },
    {
      question: "Can I learn songs of my choice?",
      answer: "Of course. Learning songs you love is the best motivation. We will use your favourite tracks to analyse theory and technique, ensuring you learn the 'why' and 'how' behind the music."
    }
  ];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeader title="Frequently Asked Questions" subtitle="Details" alignment="center" />
          
          <div className="bg-white p-6 md:p-12 shadow-sm border border-gray-200">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-0">
                  <AccordionTrigger className="hover:no-underline py-6 text-left">
                    <span className="font-display font-bold uppercase text-lg tracking-wide">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </Layout>
  );
}
