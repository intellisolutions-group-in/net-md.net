import { notFound } from "next/navigation";
import Link from "next/link";
import { blogsData, getBlogBySlug } from "@/data/blogs";

import { BlogTableOfContents } from "@/components/BlogTableOfContents";

export async function generateStaticParams() {
  return blogsData.map((b) => ({ slug: b.slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  // Related blogs: same category, excluding current
  const related = blogsData
    .filter((b) => b.category === blog.category && b.slug !== blog.slug)
    .slice(0, 2);

  // If not enough same-category, fill with others
  const relatedPosts =
    related.length >= 2
      ? related
      : [
        ...related,
        ...blogsData
          .filter((b) => b.slug !== blog.slug && !related.find((r) => r.slug === b.slug))
          .slice(0, 2 - related.length),
      ];

  const tocItems = [
    ...blog.sections.map((s) => ({ id: s.id, label: s.heading })),
    { id: "takeaways", label: "Key Takeaways" },
    { id: "faqs", label: "Frequently Asked Questions" },
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* ── Header Section ─────────────────────────────────────────── */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 blur-[180px] rounded-full" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 blur-[150px] rounded-full" />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#777777] hover:text-primary text-xs font-bold uppercase tracking-[0.2em] mb-10 transition-all hover:-translate-x-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            BACK TO INSIGHTS
          </Link>

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] bg-primary/20 text-primary px-4 py-1.5 rounded-full border border-primary/20">
              {blog.category}
            </span>
            <span className="text-[#777777] text-xs font-bold">{blog.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111111] leading-[1.1] mb-8 uppercase tracking-tight">
            {blog.title}
          </h1>

          <div className="flex items-center justify-center gap-6 text-[#777777] text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-xs font-bold text-[#777777] border border-zinc-200">
                NM
              </div>
              <span>{blog.author}</span>
            </div>
            <span className="w-1 h-1 bg-zinc-300 rounded-full" />
            <span>{blog.date}</span>
          </div>
        </div>
      </section>

      {/* ── Featured Image Placeholder ─────────────────────────────── */}
      <div className="container mx-auto px-6 max-w-5xl -mt-12 lg:-mt-20 relative z-20">
        <div className="aspect-[21/9] rounded-3xl bg-zinc-50 border border-zinc-200 shadow-sm flex flex-col items-center justify-center p-8 text-center group">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-zinc-100">
            <svg className="w-10 h-10 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-[#777777] text-xs font-bold uppercase tracking-[0.2em]">Featured Article Visual Placeholder</p>
        </div>
      </div>

      {/* ── Main Content Area ──────────────────────────────────────── */}
      <div className="container mx-auto px-6 max-w-7xl py-20">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Sticky Sidebar (Table of Contents) */}
          <aside className="lg:w-64 shrink-0 hidden lg:block">
            <BlogTableOfContents items={tocItems} />
          </aside>

          {/* Article Body */}
          <main className="flex-1 max-w-3xl">
            {/* Intro */}
            <div className="prose prose-zinc prose-lg max-w-none">
              <p className="text-lg md:text-xl text-[#555555] font-medium leading-loose mb-16 first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                {blog.intro}
              </p>

              {/* Dynamic Sections */}
              {blog.sections.map((section) => (
                <section key={section.id} id={section.id} className="mb-16 scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-black text-[#111111] uppercase tracking-tight mb-6">{section.heading}</h2>
                  <div className="text-[#555555] leading-loose space-y-4">
                    {section.body.split('\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </section>
              ))}

              {/* Highlight / Callout */}
              <div className="my-16 p-8 bg-zinc-50 border-l-4 border-primary rounded-r-2xl italic text-lg md:text-xl text-[#111111] font-medium">
                &ldquo;{blog.highlight}&rdquo;
              </div>

              {/* Key Takeaways */}
              <section id="takeaways" className="mb-16 p-8 lg:p-12 bg-zinc-50 border border-zinc-200 rounded-3xl text-[#111111] scroll-mt-32">
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Key Takeaways
                </h3>
                <ul className="grid md:grid-cols-2 gap-6">
                  {blog.takeaways.map((item, i) => (
                    <li key={i} className="flex gap-4 text-[#555555] text-sm leading-loose">
                      <span className="text-primary font-bold">0{i + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* FAQ Section */}
              <section id="faqs" className="mb-16 scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-black text-[#111111] uppercase tracking-tight mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {blog.faqs.map((faq, i) => (
                    <div key={i} className="p-6 rounded-2xl border border-zinc-100 bg-white hover:border-primary/20 transition-all shadow-sm">
                      <h4 className="font-bold text-base md:text-lg text-[#111111] mb-2">{faq.q}</h4>
                      <p className="text-[#555555] text-sm leading-loose">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Conclusion */}
              <div className="pt-8 border-t border-zinc-100">
                <h2 className="text-xl md:text-2xl font-black text-[#111111] uppercase tracking-tight mb-4">Final Thoughts</h2>
                <p className="text-[#555555] leading-loose mb-12">{blog.conclusion}</p>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* ── Related Service CTA ────────────────────────────────────── */}
      <section className="bg-white border-t border-zinc-200 py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">Ready to take the next step?</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#111111] uppercase tracking-tight mb-10 leading-[1.1]">
              Need help with <span className="text-primary">{blog.relatedService.title}</span>?
            </h2>
            <Link
              href={`/services/${blog.relatedService.slug}`}
              className="inline-flex items-center gap-3 bg-[#111111] text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-[0.2em] hover:bg-primary transition-all shadow-xl hover:shadow-primary/20"
            >
              Explore Our Service
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Related Blogs ──────────────────────────────────────────── */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#111111] uppercase tracking-tight">Recommended Reading</h2>
            <Link href="/blog" className="text-xs font-bold text-primary uppercase tracking-[0.2em] hover:gap-3 transition-all inline-flex items-center gap-2">
              All Articles →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((post) => (
              <article key={post.slug} className="group bg-white rounded-3xl border border-zinc-200 overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col">
                <div className="aspect-[16/8] bg-zinc-50 flex items-center justify-center border-b border-zinc-200">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-zinc-400 group-hover:scale-110 group-hover:text-primary transition-transform border border-zinc-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3 block">{post.category}</span>
                  <h3 className="text-lg md:text-xl font-black text-[#111111] uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-[#555555] text-sm leading-loose mb-6 line-clamp-2">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-xs font-bold uppercase tracking-[0.2em] text-[#111111] group-hover:text-primary flex items-center gap-2">
                    Read Article <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final Footer CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-white text-center px-6 border-t border-zinc-200">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-black text-[#111111] uppercase tracking-tight mb-6">Have a project in mind?</h2>
          <p className="text-[#555555] mb-10 leading-loose">Let's discuss how we can help you achieve your goals with our professional IT and financial solutions.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="bg-primary text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-[0.2em] hover:shadow-[0_20px_40px_rgba(16,185,129,0.3)] transition-all w-full sm:w-auto">
              Get In Touch
            </Link>
            <Link href="/services" className="border border-zinc-200 text-[#111111] px-10 py-5 rounded-full font-bold text-sm uppercase tracking-[0.2em] hover:border-[#111111] hover:bg-zinc-50 transition-all w-full sm:w-auto">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
