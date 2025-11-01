"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { AuthCard } from "@/components/AuthCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type AdvertiserForm = {
  companyName: string;
  contactPerson: string;
  email: string;
  password: string;
  confirmPassword: string;
  website?: string;
  terms: boolean;
};

export default function RegisterAdvertiserPage() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<AdvertiserForm>({
    defaultValues: { terms: false },
  });

  const onSubmit = (data: AdvertiserForm) => {
    alert(`Registered Advertiser: ${data.companyName}`);
  };

  const password = watch("password");

  return (
    <AuthCard title="Register as an Advertiser">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="text-sm font-medium">Company Name</label>
          <Input placeholder="Acme Inc." {...register("companyName", { required: "Company name is required" })} />
          {errors.companyName && <p className="mt-1 text-xs text-red-600">{errors.companyName.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Contact Person</label>
          <Input placeholder="Jane Smith" {...register("contactPerson", { required: "Contact person is required" })} />
          {errors.contactPerson && <p className="mt-1 text-xs text-red-600">{errors.contactPerson.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <Input type="email" placeholder="you@company.com" {...register("email", {
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
          <label className="text-sm font-medium">Website URL (optional)</label>
          <Input type="url" placeholder="https://example.com" {...register("website")} />
        </div>

        <div className="flex items-center gap-2">
          <input id="terms" type="checkbox" className="h-4 w-4 rounded border-zinc-300" {...register("terms", { required: "You must agree to continue" })} />
          <label htmlFor="terms" className="text-sm text-zinc-700">I agree to the Terms and Conditions</label>
        </div>
        {errors.terms && <p className="-mt-2 text-xs text-red-600">{errors.terms.message as string}</p>}

        <Button type="submit" className="w-full bg-[#DC2626] text-white hover:bg-[#B91C1C]">Create Advertiser Account</Button>

        <p className="text-center text-sm text-zinc-600">
          Already have an account? <Link href="/auth/login" className="text-red-600 hover:text-red-700 hover:underline">Login here</Link>
        </p>
      </form>
    </AuthCard>
  );
}


