import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-20 font-[family-name:var(--font-sans)] bg-zinc-950 text-zinc-100">
      <main className="flex flex-col gap-24 max-w-4xl w-full">
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

        {/* 2. Main Work */}
        <section className="flex flex-col gap-8">
          <h3 className="text-3xl font-semibold text-zinc-100 border-b border-zinc-800 pb-3">
            Main Work
          </h3>
          <div className="flex flex-col gap-12">
            {portfolioData.mainWork.map(project => (
              <div key={project.id} className="gradient-border p-8 flex flex-col gap-6 group">
                <div className="flex flex-col gap-2 border-b border-zinc-800/50 pb-4">
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <h4 className="text-2xl font-semibold text-zinc-200 group-hover:text-zinc-50 transition-colors">
                      {project.title}
                    </h4>
                    <span className="text-xs text-zinc-400 font-[family-name:var(--font-mono)] bg-zinc-900/50 px-3 py-1.5 rounded-full border border-zinc-800">
                      {project.role}
                    </span>
                  </div>
                  <p className="text-zinc-300 text-base leading-relaxed max-w-3xl">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-[10px] font-[family-name:var(--font-mono)] text-zinc-500 uppercase tracking-wider">
                        #{tech.replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                </div>

                {project.innovations.length > 0 && (
                  <div className="flex flex-col gap-4">
                    <h5 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">Key Innovations & Discoveries</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.innovations.map((innovation, idx) => (
                        <div key={idx} className="bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/30">
                          <h6 className="text-zinc-200 font-medium mb-2">{innovation.name}</h6>
                          <p className="text-sm text-zinc-400 leading-relaxed">{innovation.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.subProjects.length > 0 && (
                  <div className="flex flex-col gap-3 mt-2">
                    <h5 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">Sub-Projects</h5>
                    <div className="flex flex-col gap-4 pl-4 border-l border-zinc-800">
                      {project.subProjects.map((sub, idx) => (
                        <div key={idx} className="flex flex-col gap-1">
                          <h6 className="text-zinc-300 font-medium">{sub.title}</h6>
                          <p className="text-sm text-zinc-500">{sub.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 3. Gen-AI & UI Explorations */}
        <section className="flex flex-col gap-8">
          <div className="flex justify-between items-baseline border-b border-zinc-800 pb-3">
            <h3 className="text-3xl font-semibold text-zinc-100">
              Gen-AI & UI Explorations
            </h3>
            <span className="text-sm text-zinc-500 italic hidden sm:inline">Side projects testing new ideas.</span>
          </div>
          <div className="flex flex-col gap-12">
            {portfolioData.genAiExplorations.map(project => (
              <div key={project.id} className="gradient-border p-8 flex flex-col gap-6 group">
                <div className="flex flex-col gap-2 border-b border-zinc-800/50 pb-4">
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <h4 className="text-2xl font-semibold text-zinc-200 group-hover:text-zinc-50 transition-colors">
                      {project.title}
                    </h4>
                    <span className="text-xs text-zinc-400 font-[family-name:var(--font-mono)] bg-zinc-900/50 px-3 py-1.5 rounded-full border border-zinc-800">
                      {project.role}
                    </span>
                  </div>
                  <p className="text-zinc-300 text-base leading-relaxed max-w-3xl">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-[10px] font-[family-name:var(--font-mono)] text-zinc-500 uppercase tracking-wider">
                        #{tech.replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                </div>

                {project.innovations.length > 0 && (
                  <div className="flex flex-col gap-4">
                    <h5 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">Key Innovations & Discoveries</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.innovations.map((innovation, idx) => (
                        <div key={idx} className="bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/30">
                          <h6 className="text-zinc-200 font-medium mb-2">{innovation.name}</h6>
                          <p className="text-sm text-zinc-400 leading-relaxed">{innovation.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.subProjects.length > 0 && (
                  <div className="flex flex-col gap-3 mt-2">
                    <h5 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">Sub-Projects</h5>
                    <div className="flex flex-col gap-4 pl-4 border-l border-zinc-800">
                      {project.subProjects.map((sub, idx) => (
                        <div key={idx} className="flex flex-col gap-1">
                          <h6 className="text-zinc-300 font-medium">{sub.title}</h6>
                          <p className="text-sm text-zinc-500">{sub.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 4. Collaborative Projects */}
        <section className="flex flex-col gap-8">
          <div className="flex justify-between items-baseline border-b border-zinc-800 pb-3">
            <h3 className="text-3xl font-semibold text-zinc-100">
              Collaborative Projects
            </h3>
            <span className="text-sm text-zinc-500 italic hidden sm:inline">Weekend builds with friends.</span>
          </div>
          <div className="flex flex-col gap-12">
            {portfolioData.collaborativeProjects.map(project => (
              <div key={project.id} className="gradient-border p-8 flex flex-col gap-6 group">
                <div className="flex flex-col gap-2 border-b border-zinc-800/50 pb-4">
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <h4 className="text-2xl font-semibold text-zinc-200 group-hover:text-zinc-50 transition-colors">
                      {project.title}
                    </h4>
                    <span className="text-xs text-zinc-400 font-[family-name:var(--font-mono)] bg-zinc-900/50 px-3 py-1.5 rounded-full border border-zinc-800">
                      {project.role}
                    </span>
                  </div>
                  <p className="text-zinc-300 text-base leading-relaxed max-w-3xl">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-[10px] font-[family-name:var(--font-mono)] text-zinc-500 uppercase tracking-wider">
                        #{tech.replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                </div>

                {project.innovations.length > 0 && (
                  <div className="flex flex-col gap-4">
                    <h5 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">Key Innovations & Discoveries</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.innovations.map((innovation, idx) => (
                        <div key={idx} className="bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/30">
                          <h6 className="text-zinc-200 font-medium mb-2">{innovation.name}</h6>
                          <p className="text-sm text-zinc-400 leading-relaxed">{innovation.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.subProjects.length > 0 && (
                  <div className="flex flex-col gap-3 mt-2">
                    <h5 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">Sub-Projects</h5>
                    <div className="flex flex-col gap-4 pl-4 border-l border-zinc-800">
                      {project.subProjects.map((sub, idx) => (
                        <div key={idx} className="flex flex-col gap-1">
                          <h6 className="text-zinc-300 font-medium">{sub.title}</h6>
                          <p className="text-sm text-zinc-500">{sub.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 4. Philosophy Integration */}
        <section className="flex justify-center items-center py-12">
          <blockquote className="text-xl sm:text-2xl text-center text-zinc-500 italic font-serif max-w-2xl">
            "Resolution in war, defiance in defeat, magnanimity in victory, goodwill in peace."
          </blockquote>
        </section>

        {/* 5. The Path (Timeline) */}
        <section className="flex flex-col gap-8">
          <h3 className="text-3xl font-semibold text-zinc-100 border-b border-zinc-800 pb-3">
            The Path
          </h3>
          <div className="relative pl-8 flex flex-col gap-12">
            <div className="timeline-line"></div>
            
            {portfolioData.timeline.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="timeline-dot"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-3">
                  <h4 className="text-xl font-medium text-zinc-200">{item.role}</h4>
                  <span className="text-sm text-zinc-500 font-[family-name:var(--font-mono)]">
                    {item.organization} • {item.period}
                  </span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Research (Hobby Projects & Science) */}
        <section className="flex flex-col gap-8">
          <div className="flex justify-between items-baseline border-b border-zinc-800 pb-3">
            <h3 className="text-3xl font-semibold text-zinc-100">
              Research
            </h3>
            <span className="text-sm text-zinc-500 italic hidden sm:inline">Where concepts are tested.</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {portfolioData.research.map((lab, idx) => (
              <div key={idx} className="flex flex-col gap-2 group">
                <h4 className="text-lg font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors">
                  {lab.title}
                </h4>
                <div className="flex gap-2 text-[10px] font-[family-name:var(--font-mono)] text-zinc-600 uppercase tracking-wider mb-1">
                  {lab.tech.map(t => <span key={t}>{t}</span>)}
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {lab.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. The System (Second Brain) */}
        <section className="flex flex-col gap-6 mt-8">
          <div className="p-8 bg-zinc-900/40 rounded-xl border border-zinc-800/60 relative overflow-hidden group">
            <div className="absolute inset-0 bg-zinc-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="h-2 w-2 rounded-full bg-zinc-400 animate-pulse"></div>
              <h3 className="text-xl font-semibold text-zinc-200">
                The System
              </h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed relative z-10 max-w-2xl">
              An Obsidian Knowledge Graph serves as the "Second Brain," mapping connections across disciplines. It powers cross-domain context switching, ensuring that insights from distributed systems naturally inform UI architecture, and vice versa.
            </p>
          </div>
        </section>

        {/* Contact/Links Section */}
        <footer className="mt-12 pt-8 border-t border-zinc-900 flex flex-wrap gap-8 text-sm text-zinc-500 font-[family-name:var(--font-mono)] justify-center">
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
            href="mailto:jishnua511@gmail.com"
            className="hover:text-zinc-200 transition-colors"
          >
            Email
          </a>
        </footer>
      </main>
    </div>
  );
}
