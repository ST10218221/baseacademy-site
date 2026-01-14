import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const mutation = useCreateInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: InsertInquiry) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <Layout>
      <div className="bg-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <SectionHeader title="Get In Touch" subtitle="Contact" alignment="center" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto mt-12">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="font-display font-bold text-2xl uppercase mb-6">Studio Location</h3>
                <div className="flex items-start text-muted-foreground mb-4">
                  <MapPin className="w-6 h-6 mr-4 text-black flex-shrink-0" />
                  <p>
                    The Baseline Studio<br />
                    142 Brick Lane<br />
                    London, E1 6RU<br />
                    United Kingdom
                  </p>
                </div>
                {/* Embedded Map Placeholder */}
                <div className="bg-gray-100 h-64 w-full mt-6 border border-gray-200 grayscale p-4 flex items-center justify-center text-muted-foreground text-sm uppercase tracking-widest">
                  [Google Map Integration]
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl uppercase mb-6">Direct Contact</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-4 text-black" />
                    <a href="mailto:info@baselineacademy.com" className="hover:text-black transition-colors">
                      info@baselineacademy.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-4 text-black" />
                    <span>+44 (0) 20 1234 5678</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 p-8 md:p-12 border border-gray-200">
              <h3 className="font-display font-bold text-2xl uppercase mb-8">Send an Enquiry</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase font-bold tracking-wider text-xs">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="rounded-none border-gray-300 bg-white focus:ring-black h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase font-bold tracking-wider text-xs">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} className="rounded-none border-gray-300 bg-white focus:ring-black h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase font-bold tracking-wider text-xs">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Lesson Enquiry / Workshop" {...field} className="rounded-none border-gray-300 bg-white focus:ring-black h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase font-bold tracking-wider text-xs">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your playing experience and goals..." 
                            className="rounded-none border-gray-300 bg-white focus:ring-black min-h-[150px] resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full rounded-none h-14 uppercase font-bold tracking-wider text-base bg-black hover:bg-gray-800 text-white"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
