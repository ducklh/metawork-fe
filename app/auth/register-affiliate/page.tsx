"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { AuthCard } from "@/components/AuthCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type AffiliateForm = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  referralCode?: string;
  terms: boolean;
};

export default function RegisterAffiliatePage() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<AffiliateForm>({
    defaultValues: { terms: false },
  });

  const onSubmit = (data: AffiliateForm) => {
    // Simulate submit
    alert(`Registered Affiliate: ${data.fullName}`);
  };

  const password = watch("password");

  return (
    <AuthCard title="Join as an Affiliate">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="text-sm font-medium">Full Name</label>
          <Input placeholder="John Doe" {...register("fullName", { required: "Full name is required" })} />
          {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <Input type="email" placeholder="you@example.com" {...register("email", {
            required: "Email is required",
            pattern: { value: /[^\s@]+@[^\s@]+\.[^\s@]+/, message: "Enter a valid email" },
          })} />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Password</label>
          <Input type="password" placeholder="••••••••" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Min 6 characters" } })} />
          {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Confirm Password</label>
          <Input type="password" placeholder="••••••••" {...register("confirmPassword", {
            required: "Please confirm password",
            validate: (v) => v === password || "Passwords do not match",
          })} />
          {errors.confirmPassword && <p className="mt-1 text-xs text-red-600">{errors.confirmPassword.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Referral Code (optional)</label>
          <Input placeholder="REF123" {...register("referralCode")} />
        </div>

        <div className="flex items-center gap-2">
          <input id="terms" type="checkbox" className="h-4 w-4 rounded border-zinc-300" {...register("terms", { required: "You must agree to continue" })} />
          <label htmlFor="terms" className="text-sm text-zinc-700">I agree to the Terms and Conditions</label>
        </div>
        {errors.terms && <p className="-mt-2 text-xs text-red-600">{errors.terms.message as string}</p>}

        <Button type="submit" className="w-full bg-[--primary-hex] hover:opacity-90">Create Account</Button>

        <p className="text-center text-sm text-zinc-600">
          Already have an account? <Link href="/auth/login" className="text-[--primary-hex] hover:underline">Login here</Link>
        </p>
      </form>
    </AuthCard>
  );
}


