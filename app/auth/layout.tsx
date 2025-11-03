import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in — K Network",
};

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-full min-h-full w-full overflow-hidden bg-white">{children}</div>
  );
}


