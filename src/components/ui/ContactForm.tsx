"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabase";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone/WhatsApp is required"),
  quantity: z.string().min(1, "Please select an expected quantity"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: "1 Piece"
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Fallback if supabase isn't configured in .env yet
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder")) {
      toast.error("Database connection not configured. Please contact via WhatsApp directly.");
      console.log("Mock Submission Data: ", data);
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase.from('inquiries').insert([
        {
          name: data.name,
          phone: data.phone,
          quantity: data.quantity,
          message: data.message,
          created_at: new Date().toISOString()
        }
      ]);

      if (error) throw error;
      
      toast.success("Inquiry sent successfully! We will contact you soon.");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send inquiry. Please try WhatsApp directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-brand-text">Full Name *</label>
          <input 
            {...register("name")}
            type="text" 
            id="name" 
            className="w-full bg-brand-sand border border-brand-beige-dark rounded-sm px-4 py-3 text-brand-text placeholder:text-brand-text-muted/70 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all" 
            placeholder="John Doe" 
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-brand-text">Phone / WhatsApp *</label>
          <input 
            {...register("phone")}
            type="tel" 
            id="phone" 
            className="w-full bg-brand-sand border border-brand-beige-dark rounded-sm px-4 py-3 text-brand-text placeholder:text-brand-text-muted/70 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all" 
            placeholder="+91 98765 43210" 
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="quantity" className="text-sm font-medium text-brand-text">Interested Quantity *</label>
        <select 
          {...register("quantity")}
          id="quantity" 
          className="w-full bg-brand-sand border border-brand-beige-dark rounded-sm px-4 py-3 text-brand-text focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all appearance-none"
        >
          <option value="1 Piece">1 Piece</option>
          <option value="1 Pair">1 Pair</option>
          <option value="3-5 Pieces">3-5 Pieces</option>
          <option value="Large Order (5+)">Large Order (5+)</option>
        </select>
        {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-brand-text">Additional Details</label>
        <textarea 
          {...register("message")}
          id="message" 
          rows={4} 
          className="w-full bg-brand-sand border border-brand-beige-dark rounded-sm px-4 py-3 text-brand-text placeholder:text-brand-text-muted/70 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all resize-none" 
          placeholder="Any specific requirements or questions?"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-brand-green hover:bg-brand-green-light text-white font-bold py-4 rounded-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Submit Inquiry"} <ArrowRight size={18} />
      </button>
      <p className="text-xs text-center text-brand-text-muted mt-4">Protected by strict privacy standards. Submitted details are securely encrypted.</p>
    </form>
  );
}
