export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-20 font-[family-name:var(--font-sans)] bg-zinc-950 text-zinc-100">
      <main className="flex flex-col gap-24 max-w-3xl w-full">
        {/* 1. Header (The Architect) */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-100">
              Jishnu P Das
            </h1>
            <h2 className="text-2xl sm:text-3xl text-zinc-400 font-medium tracking-wide">
              Architect of Systems & Style
            </h2>
          </div>
          <p className="text-zinc-300 leading-relaxed text-lg max-w-2xl">
            Bridging the analytical rigor of astrophysics with high-utility AI and scalable systems. I design robust architectures and craft elegant interfaces.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {['Next.js', 'Python', 'AWS', 'Data Science', 'TypeScript', 'Node.js', 'React', 'Machine Learning'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-zinc-900 text-zinc-300 text-xs font-[family-name:var(--font-mono)] rounded border border-zinc-800">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* 2. Active Directives (Professional Work) */}
        <section className="flex flex-col gap-8">
          <h3 className="text-3xl font-semibold text-zinc-100 border-b border-zinc-800 pb-3">
            Active Directives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="gradient-border p-6 flex flex-col gap-3 group">
              <h4 className="text-xl font-medium text-zinc-200 group-hover:text-zinc-50 transition-colors">
                Ovi
              </h4>
              <p className="text-sm text-zinc-400 font-[family-name:var(--font-mono)] mb-1">
                The Style Architect | Next.js, Sartorial Engineering
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed">
                An advanced application blending style and system design, engineered for elegant user experiences.
              </p>
            </div>

            <div className="gradient-border p-6 flex flex-col gap-3 group">
              <h4 className="text-xl font-medium text-zinc-200 group-hover:text-zinc-50 transition-colors">
                PDF Generation Engine
              </h4>
              <p className="text-sm text-zinc-400 font-[family-name:var(--font-mono)] mb-1">
                Medical AI | SQS/Lambda/S3
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed">
                A highly scalable, asynchronous PDF generation engine built on AWS serverless architecture.
              </p>
            </div>

            <div className="gradient-border p-6 flex flex-col gap-3 group md:col-span-2">
              <h4 className="text-xl font-medium text-zinc-200 group-hover:text-zinc-50 transition-colors">
                Nexus AI Dashboard
              </h4>
              <p className="text-sm text-zinc-400 font-[family-name:var(--font-mono)] mb-1">
                AI Strategy | React, Periodic Table of AI
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed">
                A strategic dashboard featuring a comprehensive periodic table of AI components, designed for high-level technical oversight.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Philosophy Integration */}
        <section className="flex justify-center items-center py-8">
          <blockquote className="text-xl sm:text-2xl text-center text-zinc-400 italic font-serif max-w-xl">
            "Resolution in war, defiance in defeat, magnanimity in victory, goodwill in peace."
          </blockquote>
        </section>

        {/* 3. The Path (Timeline) */}
        <section className="flex flex-col gap-8">
          <h3 className="text-3xl font-semibold text-zinc-100 border-b border-zinc-800 pb-3">
            The Path
          </h3>
          <div className="relative pl-8 flex flex-col gap-10">
            <div className="timeline-line"></div>

            <div>
              <div className="timeline-dot"></div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                <h4 className="text-xl font-medium text-zinc-200">Full-Stack Engineer</h4>
                <span className="text-sm text-zinc-500 font-[family-name:var(--font-mono)]">Archimydes Inc. • 2022 - Present</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Architecting and developing modern web applications, focusing on scalable backend systems and responsive frontends.
              </p>
            </div>

            <div>
              <div className="timeline-dot"></div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                <h4 className="text-xl font-medium text-zinc-200">Director of R&D / Lead Developer</h4>
                <span className="text-sm text-zinc-500 font-[family-name:var(--font-mono)]">2019 - 2022</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Led research and development initiatives, bridging the gap between innovative concepts and production-ready software.
              </p>
            </div>

            <div>
              <div className="timeline-dot"></div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                <h4 className="text-xl font-medium text-zinc-200">Astrophysics Researcher</h4>
                <span className="text-sm text-zinc-500 font-[family-name:var(--font-mono)]">Osmania University • 2015 - 2019</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Conducted rigorous data analysis and visualization for astronomical research.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Laboratories (Hobby Projects) */}
        <section className="flex flex-col gap-8">
          <h3 className="text-3xl font-semibold text-zinc-100 border-b border-zinc-800 pb-3">
            Laboratories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-medium text-zinc-300">Variable Star Light Curve Classification</h4>
              <p className="text-sm text-zinc-500">ANN, Python, Data Science</p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-medium text-zinc-300">Open Clusters Evolution Animation</h4>
              <p className="text-sm text-zinc-500">Blender, Python Scripting</p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-medium text-zinc-300">Photometry Image Reduction</h4>
              <p className="text-sm text-zinc-500">IRAF, Image Processing</p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-medium text-zinc-300">Visual Arts & Photography</h4>
              <p className="text-sm text-zinc-500">Digital Composition</p>
            </div>
          </div>
        </section>

        {/* 6. The System (Second Brain) */}
        <section className="flex flex-col gap-6 mt-8">
          <div className="p-8 bg-zinc-900/50 rounded-xl border border-zinc-800/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-zinc-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
            <h3 className="text-2xl font-semibold text-zinc-200 mb-3 relative z-10">
              The System
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed relative z-10 max-w-xl">
              An Obsidian Knowledge Graph serves as the "Second Brain," mapping connections across disciplines. It powers cross-domain context switching, ensuring that insights from distributed systems naturally inform UI architecture, and vice versa.
            </p>
          </div>
        </section>

        {/* Contact/Links Section */}
        <footer className="mt-8 pt-8 border-t border-zinc-900 flex gap-8 text-sm text-zinc-500 font-[family-name:var(--font-mono)] justify-center">
          <a
            href="https://github.com/jishnupdas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jishnu-p-das-1b37493a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jishnu@techagelabs.com"
            className="hover:text-zinc-200 transition-colors"
          >
            Email
          </a>
        </footer>
      </main>
    </div>
  );
}
