"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function GoogleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.537 31.91 29.177 35 24 35 16.82 35 11 29.18 11 22S16.82 9 24 9c3.31 0 6.324 1.235 8.626 3.26l5.657-5.657C34.676 3.027 29.58 1 24 1 10.745 1 0 11.745 0 25s10.745 24 24 24 24-10.745 24-24c0-1.627-.17-3.215-.389-4.917z" />
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.6 16.23 18.961 13 24 13c3.31 0 6.324 1.235 8.626 3.26l5.657-5.657C34.676 3.027 29.58 1 24 1 15.317 1 7.914 5.741 3.694 12.691z" />
      <path fill="#4CAF50" d="M24 49c5.083 0 9.72-1.746 13.333-4.686l-6.157-5.203C29.92 40.463 27.086 41 24 41c-5.135 0-9.475-3.063-11.29-7.447l-6.519 5.02C9.355 44.979 16.136 49 24 49z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.36 3.175-4.128 5.672-7.47 6.734.003-.001.006-.002.01-.003l6.157 5.203C31.72 47.254 36.917 49 42 49c7.732 0 14-6.268 14-14 0-1.627-.17-3.215-.389-4.917z" transform="translate(-14 -1)" />
    </svg>
  );
}

export default function LoginPage() {
  return (
    <div className="h-full bg-white">
      <div className="grid min-h-[calc(100vh-64px)] grid-cols-1 md:grid-cols-2">
        {/* Left: Logo */}
        <div className="relative hidden items-center justify-center md:flex">
          <div className="relative w-4/5 max-w-xl">
            <Image
              src="/logos/logo-row-light.png"
              alt="Metawork Logo"
              width={600}
              height={400}
              className="mx-auto h-auto w-3/4 md:w-2/3"
              priority
            />
          </div>
        </div>

        {/* Right: Login Card full half width */}
        <div className="flex h-full items-center justify-center p-4 md:p-10">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 md:h-auto">
            <div className="text-center">
              <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Sign in to Metawork</h1>
            </div>

            <div className="mt-6">

              <div className="mt-3">
                <div>
                  <label className="text-sm font-medium">Username</label>
                  <Input placeholder="Username" />
                </div>
                <div>
                  <label className="text-sm font-medium">Password</label>
                  <Input type="password" placeholder="••••••••" />
                </div>
                <Button className="w-full bg-[#DC2626] text-white hover:bg-[#B91C1C]">Sign in</Button>
              </div>

              <div className=" space-y-3">
                <p className="text-center text-sm font-medium text-zinc-700">Don’t have an account?</p>
                <Button variant="outline" className="w-full justify-center gap-2">
                  <GoogleIcon />
                  Continue with Google
                </Button>
                <p className="text-center text-sm text-zinc-600">
                  <Link href="/auth/register-affiliate" className="font-semibold text-red-600 hover:text-red-700 hover:underline">Register as Affiliate</Link>
                  {"  or  "}
                  <Link href="/auth/register-advertiser" className="font-semibold text-red-600 hover:text-red-700 hover:underline">Register as Advertiser</Link>
                </p>
              </div>

              <p className="text-center text-xs text-zinc-500">
                By continuing, you agree to our <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


