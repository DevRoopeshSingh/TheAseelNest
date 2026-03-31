"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabase";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone/WhatsApp number is required"),
  quantity: z.string().min(1, "Please select a quantity"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

function Spinner() {
  return (
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
    </svg>
  );
}

const inputClass = "w-full bg-brand-sand border border-brand-beige-dark rounded-sm px-4 py-3 text-brand-text placeholder:text-brand-text-muted/70 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/30 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { quantity: "1 Piece" }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder")) {
      toast.error("Database not configured. Please contact via WhatsApp directly.");
      console.log("Mock Submission Data:", data);
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase.from('inquiries').insert([{
        name: data.name,
        phone: data.phone,
        quantity: data.quantity,
        message: data.message,
        created_at: new Date().toISOString()
      }]);

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10 w-full" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-brand-text">Full Name *</label>
          <input
            {...register("name")}
            type="text"
            id="name"
            autoComplete="name"
            className={inputClass}
            placeholder="John Doe"
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p id="name-error" role="alert" aria-live="polite" className="text-red-600 text-xs mt-1 flex items-center gap-1">
              <span aria-hidden="true">⚠</span> {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-brand-text">Phone / WhatsApp *</label>
          <input
            {...register("phone")}
            type="tel"
            id="phone"
            autoComplete="tel"
            className={inputClass}
            placeholder="+91 98765 43210"
            aria-describedby={errors.phone ? "phone-error" : undefined}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p id="phone-error" role="alert" aria-live="polite" className="text-red-600 text-xs mt-1 flex items-center gap-1">
              <span aria-hidden="true">⚠</span> {errors.phone.message}
            </p>
          )}
        </div>
      </div>
      
      <div className="space-y-1.5">
        <label htmlFor="quantity" className="text-sm font-medium text-brand-text">Interested Quantity *</label>
        <div className="relative">
          <select
            {...register("quantity")}
            id="quantity"
            className={`${inputClass} appearance-none pr-10 cursor-pointer`}
            aria-describedby={errors.quantity ? "quantity-error" : undefined}
            aria-invalid={!!errors.quantity}
          >
            <option value="1 Piece">1 Piece</option>
            <option value="1 Pair">1 Pair (Male + Female)</option>
            <option value="3-5 Pieces">3–5 Pieces</option>
            <option value="Large Order (5+)">Large Order (5+)</option>
          </select>
          {/* Custom caret */}
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-brand-text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {errors.quantity && (
          <p id="quantity-error" role="alert" aria-live="polite" className="text-red-600 text-xs mt-1 flex items-center gap-1">
            <span aria-hidden="true">⚠</span> {errors.quantity.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium text-brand-text">Additional Details <span className="text-brand-text-muted font-normal">(optional)</span></label>
        <textarea
          {...register("message")}
          id="message"
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Any specific requirements or questions?"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-green hover:bg-brand-green-light text-white font-bold py-4 rounded-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green focus-visible:outline-offset-2"
      >
        {isSubmitting ? (
          <>
            <Spinner />
            <span>Sending…</span>
          </>
        ) : (
          <>
            Submit Inquiry <ArrowRight size={18} />
          </>
        )}
      </button>
      <p className="text-xs text-center text-brand-text-muted">Protected by strict privacy standards. Your details are securely encrypted.</p>
    </form>
  );
}
