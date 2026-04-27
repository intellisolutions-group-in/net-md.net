import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData, getServiceBySlug } from "@/data/services";

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="flex flex-col">
      {/* ── 1. Hero Section ────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/15 blur-[150px] rounded-full" />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#777777] hover:text-primary text-sm font-bold uppercase tracking-widest mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-primary">
                {service.tagline}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111111] uppercase tracking-tight leading-[1.1] mb-6">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-[#555555] leading-loose">
                {service.intro}
              </p>
            </div>
            {/* Image Placeholder */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full aspect-[4/3] rounded-[2rem] bg-zinc-50 border border-zinc-200 flex items-center justify-center shadow-sm">
                <span className="text-[#777777] text-sm font-bold uppercase tracking-widest">Service Hero Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Service Overview ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-[#111111] uppercase tracking-tight mb-8">Service Overview</h2>
              <div className="space-y-6 text-[#555555] leading-loose">
                <div>
                  <h3 className="text-[#111111] font-bold text-xl mb-2">The Problem</h3>
                  <p className="text-base">{service.overview.problem}</p>
                </div>
                <div>
                  <h3 className="text-[#111111] font-bold text-xl mb-2">Who It&apos;s For</h3>
                  <p className="text-base">{service.overview.audience}</p>
                </div>
                <div>
                  <h3 className="text-[#111111] font-bold text-xl mb-2">Our Solution</h3>
                  <p className="text-base">{service.overview.solution}</p>
                </div>
              </div>
            </div>
            {/* Image Placeholder */}
            <div className="w-full aspect-video rounded-[2rem] bg-zinc-50 border border-zinc-200 flex items-center justify-center shadow-sm">
              <span className="text-[#777777] text-sm font-bold uppercase tracking-widest">Overview Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Key Features ────────────────────────────────────────── */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-black text-[#111111] uppercase tracking-tight mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.features.map((feat, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-zinc-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-bold text-[#111111]">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Benefits ────────────────────────────────────────────── */}
      <section className="py-20 bg-white text-[#111111]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight mb-8">
                Why This <span className="text-primary">Matters</span>
              </h2>
              <div className="space-y-5">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold">
                      {i + 1}
                    </div>
                    <p className="text-[#555555] text-base leading-loose font-medium">{b}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Image Placeholder */}
            <div className="w-full aspect-video rounded-[2rem] bg-zinc-50 border border-zinc-200 flex items-center justify-center shadow-sm">
              <span className="text-[#777777] text-sm font-bold uppercase tracking-widest">Benefits Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Process ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-black text-[#111111] uppercase tracking-tight mb-4 text-center">How It Works</h2>
          <p className="text-[#555555] text-base leading-loose font-medium text-center mb-16 max-w-xl mx-auto">
            Our structured delivery process ensures quality at every stage.
          </p>
          <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {service.process.map((p, i) => (
              <div key={i} className="text-center group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-200 text-[#111111] flex items-center justify-center font-black text-lg mb-5 mx-auto shadow-sm group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:border-primary transition-all duration-300">
                  {i + 1}
                </div>
                <h4 className="font-bold text-[#111111] mb-2">{p.step}</h4>
                <p className="text-[#555555] text-sm leading-loose">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Use Cases ───────────────────────────────────────────── */}
      <section className="py-20 bg-zinc-50 border-y border-zinc-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-black text-[#111111] uppercase tracking-tight mb-12 text-center">Ideal Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {service.useCases.map((uc, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm"
              >
                <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                <span className="text-[#111111] font-bold">{uc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Call to Action ──────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="bg-primary rounded-[2rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 w-80 h-80 bg-white/10 rounded-full blur-[80px]" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-white/80 text-base mb-10 leading-relaxed">
                Let&apos;s discuss how {service.title} can transform your business.
                Our experts are ready to build a solution tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-primary px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-zinc-100 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="bg-black/10 text-white border border-white/20 px-8 py-3 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-white/10 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
