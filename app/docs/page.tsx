export default function DocsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">K Network Documentation</h1>
      <p className="mt-2 text-zinc-600">Simulated documentation content.</p>

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold">K Network Marketplace Features</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-zinc-700">
            <li>High-converting campaigns across Crypto and Forex</li>
            <li>Real-time analytics and transparent reporting</li>
            <li>Flexible, fast crypto payouts</li>
            <li>Fraud prevention and quality controls</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Business Model</h2>
          <p className="mt-3 text-zinc-700">
            K Network operates on a performance-based model, aligning incentives between advertisers and affiliates. Advertisers pay for
            validated conversions. Affiliates earn based on transparent attribution using standardized tracking.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Roadmap</h2>
          <ol className="mt-3 list-decimal space-y-1 pl-6 text-zinc-700">
            <li>Self-serve advertiser onboarding and campaign creation</li>
            <li>Developer API for programmatic offer management</li>
            <li>Advanced fraud detection and anomaly scoring</li>
            <li>Expanded marketplace categories and geo support</li>
          </ol>
        </section>
      </div>
    </div>
  );
}


