import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-gray-100 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4 block">
              About Baseline
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter text-black mb-6">
              The Instructor
            </h1>
          </div>
        </div>
      </div>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Image Column */}
            <div className="space-y-8">
              {/* unsplash: black and white photo of bass player on stage */}
              <img 
                src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?w=800&q=80&fit=crop" 
                alt="Instructor performing live" 
                className="w-full h-[500px] object-cover filter grayscale"
              />
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-display font-bold text-4xl mb-2">15+</h4>
                  <p className="text-muted-foreground uppercase text-sm tracking-wider">Years Experience</p>
                </div>
                <div>
                  <h4 className="font-display font-bold text-4xl mb-2">500+</h4>
                  <p className="text-muted-foreground uppercase text-sm tracking-wider">Students Taught</p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <h3 className="font-display font-bold text-3xl uppercase mb-6">Hello, I'm Alex.</h3>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-6">
                  I founded Baseline Academy with a singular mission: to provide high-level bass instruction 
                  that bridges the gap between academic theory and real-world application.
                </p>
                <p className="mb-6">
                  Having toured across the UK and Europe with various jazz, funk, and rock ensembles, 
                  I bring practical stage experience into every lesson. I studied Music Performance at 
                  the London College of Music and have dedicated my career to deconstructing the 
                  role of the bass guitar.
                </p>
                <p className="mb-8">
                  My teaching philosophy centres on 'musicality first'. Technique is vital, but it is 
                  merely a tool to express ideas. We focus on ear training, rhythmic displacement, 
                  and harmonic understanding to make you a complete musician, not just a bass player.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-200 mt-8">
                <h4 className="font-display font-bold uppercase tracking-wider mb-4">Credentials</h4>
                <ul className="space-y-3">
                  {[
                    "BMus (Hons) Music Performance - London College of Music",
                    "Session bassist for EMI & Universal artists",
                    "Regular contributor to Bass Player Magazine",
                    "Endorsed by Fender & Ampeg"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-black" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10">
                <Link href="/contact">
                  <Button className="rounded-none px-8 py-6 text-base uppercase font-bold tracking-wider">
                    Enquire About Lessons
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
