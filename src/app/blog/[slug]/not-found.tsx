import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted mb-8 leading-relaxed">
          The article you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/blog" className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
            Browse Articles
          </Link>
          <Link href="/" className="border-2 border-zinc-200 text-foreground px-8 py-3 rounded-full font-semibold hover:border-primary transition-all">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
