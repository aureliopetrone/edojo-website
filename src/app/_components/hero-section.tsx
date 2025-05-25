import Link from "next/link";
import OrigamiLink from "./origami-link";
import TypewriterText from "./typewriter-text";

export default function HeroSection() {
  const headlines = [
    { first: "innovate(", second: "together", third: ")" },
    { first: "lab.incubate(", second: "ideas", third: ")" },
    { first: "const win =", second: "collaborate()" },
    { first: "function", second: "breakthrough()" },
    { first: "tech.empower(", second: "impossible", third: ")" },
    { first: "ecosystem.", second: "future()" }
  ];

  return (
    <section className="relative overflow-hidden pt-16 min-h-screen flex items-center section-white">
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Main Title */}
          <div className="mb-6">
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl leading-tight mb-4 min-h-[120px] sm:min-h-[160px] flex items-center justify-center">
              <TypewriterText 
                phrases={headlines}
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={2500}
              />
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Tech Lab per progetti innovativi. Sviluppo software e collaborazioni aziendali.
            </p>
          </div>

          {/* Value Proposition */}
          <div className="mt-6 mb-8">
            <div className="inline-flex items-center bg-primary-50 rounded-full px-6 py-3 border border-primary-200">
              <span className="text-primary-700 font-medium">
                <span className="font-mono text-sm mr-2">{/* */}</span>
                Tech Lab • Sviluppo Software • Consulenza
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <OrigamiLink
              href="#contatti"
              variant="primary"
              size="lg"
            >
              Contatti
            </OrigamiLink>
            <Link href="#chi-siamo" className="text-sm font-semibold leading-6 text-neutral-600 hover:text-neutral-900 transition-colors group flex items-center">
              Chi siamo
              <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 