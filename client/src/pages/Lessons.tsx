import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Lessons() {
  const levels = {
    beginner: [
      { title: "Instrument Fundamentals", content: "Anatomy of the bass, tuning, strap height, and posture." },
      { title: "Right Hand Technique", content: "Fingerstyle basics, alternating plucking, floating thumb vs anchor." },
      { title: "Left Hand Technique", content: "Finger independence, shifting, one-finger-per-fret system." },
      { title: "Rhythm & Timing", content: "Understanding subdivisions, locking with the kick drum, metronome work." },
      { title: "Essential Scales", content: "Major and Minor Pentatonics, Major Scale construction." },
    ],
    intermediate: [
      { title: "Slap Bass Fundamentals", content: "Thumb technique, popping, muted notes, and hammer-ons." },
      { title: "Walking Bass Lines", content: "Chord tones, approach notes, chromaticism for jazz and blues." },
      { title: "Ear Training", content: "Interval recognition, transcribing bass lines by ear." },
      { title: "Groove Analysis", content: "Studying Motown, Funk, and Soul bass lines. Ghost notes." },
      { title: "Music Theory II", content: "Modes, triad inversions, diatonic harmony." },
    ],
    advanced: [
      { title: "Advanced Techniques", content: "Double thumbing, tapping, sweeping, harmonics." },
      { title: "Odd Time Signatures", content: "Playing comfortably in 5/4, 7/8, and mixed meters." },
      { title: "Soloing Concepts", content: "Melodic development, phrasing, chordal playing." },
      { title: "Sight Reading", content: "Standard notation reading for theatre and session work." },
      { title: "Professional Development", content: "Tone crafting, pedalboard building, industry advice." },
    ]
  };

  return (
    <Layout>
      <div className="bg-white pt-20 pb-12">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="The Curriculum" 
            subtitle="Structured Progress" 
            alignment="center"
          />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Our curriculum is modular. While we recommend a structured path, we can mix and match 
            modules based on your current ability and musical interests.
          </p>

          <Tabs defaultValue="beginner" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-gray-100 rounded-none p-1 mb-12">
              {["beginner", "intermediate", "advanced"].map((level) => (
                <TabsTrigger 
                  key={level}
                  value={level} 
                  className="rounded-none uppercase tracking-widest font-bold py-3 data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  {level}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(levels).map(([key, items]) => (
              <TabsContent key={key} value={key} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 px-6">
                      <AccordionTrigger className="hover:no-underline py-6">
                        <span className="font-display font-bold uppercase text-lg text-left">
                          {index + 1}. {item.title}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                <div className="mt-12 text-center p-8 bg-gray-50 border border-gray-200">
                  <h4 className="font-display font-bold uppercase text-xl mb-4">
                    Ready to start this level?
                  </h4>
                  <Link href="/contact">
                    <Button className="rounded-none px-8 py-6 uppercase font-bold tracking-wider">
                      Book a Lesson
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
