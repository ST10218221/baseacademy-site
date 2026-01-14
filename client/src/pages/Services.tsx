import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "1-on-1 Tuition",
      price: "£45",
      period: "per hour",
      description: "Bespoke private lessons focused entirely on your development. Available in-person at my London studio.",
      features: [
        "Personalised curriculum",
        "Technique analysis & correction",
        "Theory & harmony application",
        "Performance preparation",
        "Gear consultation"
      ],
      popular: true
    },
    {
      title: "Online Coaching",
      price: "£40",
      period: "per hour",
      description: "Professional remote instruction via Zoom. High-definition audio and multi-camera setup for clear demonstration.",
      features: [
        "Flexible scheduling",
        "Recorded lesson archives",
        "Digital PDF materials",
        "Video feedback on practice",
        "Same curriculum as in-person"
      ],
      popular: false
    },
    {
      title: "Intensive Workshop",
      price: "£120",
      period: "half day",
      description: "A 4-hour deep dive into specific topics such as Slap Technique, Walking Bass, or Sight Reading.",
      features: [
        "Focused topic mastery",
        "Small group setting (max 4)",
        "Comprehensive workbook",
        "Lunch included",
        "Networking with other players"
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      <div className="bg-black text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Tuition Services" 
            subtitle="Invest in your craft" 
            alignment="left"
            light={true}
          />
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Choose the format that suits your lifestyle. Whether you prefer the intensity of 
            in-person training or the convenience of online learning, the standard remains uncompromising.
          </p>
        </div>
      </div>

      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`border-none shadow-lg rounded-none flex flex-col relative ${service.popular ? "ring-2 ring-black transform md:-translate-y-4" : ""}`}>
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold uppercase px-3 py-1 tracking-wider">
                    Most Popular
                  </div>
                )}
                <CardHeader className="p-8 pb-4">
                  <h3 className="font-display font-bold text-2xl uppercase tracking-wide mb-2">{service.title}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">{service.price}</span>
                    <span className="text-muted-foreground ml-2 text-sm uppercase">{service.period}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="p-8 pt-4 flex-grow">
                  <hr className="border-gray-100 mb-6" />
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="w-4 h-4 mr-3 mt-0.5 text-black flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-8 pt-0">
                  <Link href="/contact" className="w-full">
                    <Button className={`w-full rounded-none py-6 uppercase font-bold tracking-wider ${service.popular ? "bg-black text-white hover:bg-gray-800" : "bg-white text-black border-2 border-black hover:bg-gray-50"}`}>
                      Book Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-20 text-center max-w-2xl mx-auto">
            <h3 className="font-display font-bold text-2xl uppercase mb-4">Custom Programmes</h3>
            <p className="text-muted-foreground mb-8">
              Need something more specific? I offer tailored programmes for university audition preparation, 
              studio recording prep, and tour consultation.
            </p>
            <Link href="/contact" className="font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-600 transition-colors">
              Get in touch to discuss
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
