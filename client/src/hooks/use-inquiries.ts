import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      // Validate with schema first
      const validated = api.inquiries.create.input.parse(data);
      
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        throw new Error("Failed to submit inquiry");
      }
      
      return api.inquiries.create.responses[200].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Enquiry Sent",
        description: "Thank you for contacting Baseline Academy. We will be in touch shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please check your internet connection and try again.",
        variant: "destructive",
      });
    }
  });
}
