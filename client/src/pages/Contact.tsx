import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeader title="Get In Touch" subtitle="Contact" alignment="center" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mt-16">
            
            {/* Location */}
            <div className="flex flex-col items-center text-center p-8 border border-gray-100 bg-gray-50/50 hover-elevate transition-all">
              <div className="bg-black text-white p-4 mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl mb-4">Studio Location</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Baseline Studio<br />
                Midrand<br />
                Johannesburg, 1682<br />
                South Africa
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center p-8 border border-gray-100 bg-gray-50/50 hover-elevate transition-all">
              <div className="bg-black text-white p-4 mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl mb-4">Email Us</h3>
              <a 
                href="mailto:info@baselineacademy.co.za" 
                className="text-muted-foreground hover:text-black transition-colors"
              >
                info@baselineacademy.co.za
              </a>
              <p className="text-xs text-muted-foreground mt-2">We typically reply within 24 hours</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center text-center p-8 border border-gray-100 bg-gray-50/50 hover-elevate transition-all">
              <div className="bg-black text-white p-4 mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl mb-4">Call Us</h3>
              <a 
                href="tel:+27111234567" 
                className="text-muted-foreground hover:text-black transition-colors"
              >
                +27 (0) 11 123 4567
              </a>
              <p className="text-xs text-muted-foreground mt-2">Mon-Fri, 9am - 6pm</p>
            </div>

          </div>

          {/* Map Placeholder */}
          <div className="max-w-5xl mx-auto mt-16">
            <div className="bg-gray-100 h-96 w-full border border-gray-200 grayscale p-4 flex items-center justify-center text-muted-foreground text-sm uppercase tracking-widest">
              [Google Map Integration]
            </div>
          </div>
          
        </div>
      </div>
    </Layout>
  );
}
