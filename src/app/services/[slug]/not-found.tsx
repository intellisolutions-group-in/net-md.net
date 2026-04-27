import Link from "next/link";

export default function ServiceNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <p className="text-muted mb-8 leading-relaxed">
          The service you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            View All Services
          </Link>
          <Link
            href="/"
            className="border-2 border-zinc-200 text-foreground px-8 py-3 rounded-full font-semibold hover:border-primary transition-all"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
