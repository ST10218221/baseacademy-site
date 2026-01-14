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
            <span className="text-sm font-bold tracking-[0.2em] text-muted-foreground mb-4 block">
              About Baseline
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tighter text-black mb-6">
              The instructor
            </h1>
          </div>
        </div>
      </div>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Image Column */}
            <div className="space-y-8">
              <img 
                src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80&fit=crop" 
                alt="Jaiden teaching a student" 
                className="w-full h-[500px] object-cover"
              />
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-display font-bold text-4xl mb-2">15+</h4>
                  <p className="text-muted-foreground text-sm tracking-wider">Years experience</p>
                </div>
                <div>
                  <h4 className="font-display font-bold text-4xl mb-2">500+</h4>
                  <p className="text-muted-foreground text-sm tracking-wider">Students taught</p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <h3 className="font-display font-bold text-3xl mb-6">Hello, I'm Jaiden.</h3>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-6">
                  I founded Baseline Academy in Midrand, South Africa, with a singular mission: to provide high-level bass instruction 
                  that bridges the gap between academic theory and real-world application.
                </p>
                <p className="mb-6">
                  Having toured across South Africa and abroad with various jazz, funk, and rock ensembles, 
                  I bring practical stage experience into every lesson.
                </p>
                <p className="mb-8">
                  My teaching philosophy centres on 'musicality first'. Technique is vital, but it is 
                  merely a tool to express ideas. We focus on ear training, rhythmic displacement, 
                  and harmonic understanding to make you a complete musician, not just a bass player.
                </p>
              </div>

              <div className="bg-gray-50 p-8 border border-gray-200 mt-8">
                <h4 className="font-display font-bold tracking-wider mb-4">Credentials</h4>
                <ul className="space-y-3">
                  {[
                    "Professional bassist with 15+ years experience",
                    "Session bassist for national artists",
                    "Expert in jazz, funk, and contemporary styles",
                    "Passionate about teaching the next generation"
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
                  <Button className="rounded-none px-8 py-6 text-base font-bold tracking-wider">
                    Enquire about lessons
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
