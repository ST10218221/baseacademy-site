import { Link } from "wouter";
import { ArrowRight, Star, Music, Users, Mic2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-80">
          <img 
            src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1920&q=80&fit=crop" 
            alt="Child performing bass guitar" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl">
            <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              Master the <br/>
              <span className="text-white/40">low end</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-xl mb-10 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
              Professional bass guitar tuition tailored to your goals. 
              From groove fundamentals to advanced technique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <Link href="/contact">
                <Button size="lg" className="rounded-none text-lg px-10 py-8 font-bold tracking-wider bg-white text-black hover:bg-gray-200 border-2 border-white">
                  Book first lesson
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-none text-lg px-10 py-8 font-bold tracking-wider bg-transparent text-white border-2 border-white hover:bg-white hover:text-black">
                  View programmes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Philosophy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader 
                title="More than just notes" 
                subtitle="Philosophy"
                alignment="left"
              />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The bass guitar is the foundation of modern music. It bridges rhythm and harmony, 
                requiring a unique mindset to master. At Baseline Academy, we don't just teach you 
                patterns; we teach you how to think, listen, and groove like a professional.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Whether you are picking up an instrument for the first time or are an experienced 
                player looking to break through a plateau, our curriculum is designed to challenge 
                and inspire you.
              </p>
              <Link href="/about">
                <Button variant="link" className="p-0 h-auto text-black font-bold tracking-widest text-sm hover:text-gray-600 group">
                  Meet your instructor <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="relative aspect-[4/5] bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=800&q=80&fit=crop"
                alt="Instructor teaching child" 
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-black z-10 flex items-center justify-center">
                <Music className="text-white w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50 border-y border-border">
        <div className="container mx-auto px-4">
          <SectionHeader title="Tuition Options" subtitle="Choose Your Path" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Mic2 className="w-8 h-8" />,
                title: "1-on-1 Lessons", 
                desc: "Personalised instruction tailored to your specific goals and learning style.",
                link: "/services"
              },
              { 
                icon: <Users className="w-8 h-8" />,
                title: "Group Workshops", 
                desc: "Collaborative sessions focusing on rhythm section interplay and groove.",
                link: "/services"
              },
              { 
                icon: <Star className="w-8 h-8" />,
                title: "Online Coaching", 
                desc: "High-quality remote lessons via Zoom with HD audio and multiple camera angles.",
                link: "/services"
              }
            ].map((service, idx) => (
              <Link key={idx} href={service.link} className="group cursor-pointer">
                <div className="bg-white p-10 h-full border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-black flex flex-col">
                  <div className="mb-6 p-4 bg-gray-50 inline-block w-fit rounded-none group-hover:bg-black group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-sm font-bold tracking-widest mt-auto group-hover:translate-x-2 transition-transform">
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Star className="w-12 h-12 mx-auto mb-8 text-white/20" />
            <h3 className="font-display font-medium text-3xl md:text-5xl leading-tight mb-12">
              "The most comprehensive bass education I've ever received. The attention to detail on technique and tone is unmatched."
            </h3>
            <div className="flex flex-col items-center">
              <span className="font-bold tracking-widest text-lg">James Wilson</span>
              <span className="text-white/50 text-sm mt-1 tracking-wide">Professional session musician</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tighter mb-8">
            Ready to <br className="md:hidden" /> start?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Book your consultation today and take the first step towards mastering the instrument.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-none text-lg px-12 py-8 font-bold tracking-wider bg-black text-white hover:bg-gray-800">
              Book your session
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
