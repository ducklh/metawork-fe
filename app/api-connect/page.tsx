import { Button } from "@/components/ui/button";
import { Server } from "lucide-react";

export default function APIConnectPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">API Integration — Coming Soon</h1>
        <p className="mt-3 max-w-2xl text-zinc-600">
          We’re working on a developer API for automated tracking and integration.
        </p>

        <div className="mt-10 rounded-xl border bg-zinc-50 p-10 text-center">
          <Server className="mx-auto h-10 w-10 text-[--primary-hex]" />
          <p className="mt-3 text-zinc-700">Programmatic access to offers, tracking, and reporting.</p>
          <div className="mt-6">
            <Button className="bg-[--primary-hex] hover:opacity-90">Notify Me</Button>
          </div>
        </div>
      </div>
    </div>
  );
}


