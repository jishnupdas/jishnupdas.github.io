export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-20 font-[family-name:var(--font-sans)]">
      <main className="flex flex-col gap-16 max-w-2xl w-full">
        {/* Intro Section */}
        <section className="flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Hello, I&apos;m Jishnu.
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-400 font-medium">
            Software Engineer & Problem Solver.
          </h2>
          <p className="text-gray-300 leading-relaxed mt-2">
            I love diving into complex problems and writing elegant code. Passionate about algorithms, system design, and continuous learning.
          </p>
        </section>

        {/* Skills Section */}
        <section className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-white border-b border-gray-800 pb-2">
            Skills
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-300 font-[family-name:var(--font-mono)] text-sm">
            <li className="flex items-center gap-2">
              <span className="text-green-500">▹</span> Python
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">▹</span> TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">▹</span> Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">▹</span> Data Science
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">▹</span> Linux
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">▹</span> Machine Learning
            </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-white border-b border-gray-800 pb-2">
            Selected Work
          </h3>
          <div className="flex flex-col gap-6">
            <div className="group">
              <h4 className="text-lg font-medium text-gray-200 group-hover:text-green-400 transition-colors">
                Variable Star Light Curve Classification
              </h4>
              <p className="text-sm text-gray-400 mt-1">
                Used Artificial Neural Networks and Python to classify light curves in astronomical data.
              </p>
            </div>
            <div className="group">
              <h4 className="text-lg font-medium text-gray-200 group-hover:text-green-400 transition-colors">
                Open Clusters Evolution Animation
              </h4>
              <p className="text-sm text-gray-400 mt-1">
                Visualized astrophysics concepts using Blender and Python scripting.
              </p>
            </div>
          </div>
        </section>

        {/* Contact/Links Section */}
        <footer className="mt-8 flex gap-6 text-sm text-gray-500 font-[family-name:var(--font-mono)]">
          <a
            href="https://github.com/jishnupdas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jishnu-p-das-1b37493a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jishnu@techagelabs.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </footer>
      </main>
    </div>
  );
}
