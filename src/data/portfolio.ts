export const portfolioData = {
  mainWork: [
    {
      id: "ovi",
      title: "Ovi: The Style Architect",
      role: "Architect & Lead Engineer",
      techStack: ["Next.js 16", "TypeScript", "Tailwind", "Turso", "Gemini AI"],
      summary: "A 'Polymorphic' expert system for fashion that issues structural directives based on cultural contexts.",
      innovations: [
        {
          name: "The Verse System",
          description: "A proprietary architectural framework that encapsulates cultural, aesthetic, and logical contexts into modular units, reconfiguring the AI persona, lexicon, and visual theme per occasion."
        },
        {
          name: "AI 'Generate & Serve' Pipeline",
          description: "A structured generation pipeline using Zod schema validation to ensure strictly typed LLM outputs before converting assets to Base64 and serving via Google Cloud Storage."
        }
      ],
      subProjects: []
    },
    {
      id: "accurkardia",
      title: "Holter MCT PDF Generation Engine",
      role: "Backend & Systems Engineer",
      techStack: ["AWS SQS", "AWS Lambda", "AWS S3", "Node.js", "Python"],
      summary: "Mission-critical serverless pipeline for generating high-fidelity medical ECG reports and data visualizations.",
      innovations: [
        {
          name: "Asynchronous Generation Pipeline",
          description: "Decoupled report generation using SQS and Lambda to handle massive throughput and variable load without blocking the main application API."
        },
        {
          name: "Memory & Pagination Optimization",
          description: "Engineered rendering strategies to overcome strict memory constraints when generating reports with thousands of data points, ensuring stability under heavy load."
        }
      ],
      subProjects: []
    }
  ],
  designProjects: [
    {
      id: "nexus-ai",
      title: "Nexus AI Dashboard",
      role: "Frontend Engineer / Designer",
      techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Dagre"],
      summary: "An AI-architecture consultation platform designed to visualize and strategize complex AI implementations.",
      innovations: [
        {
          name: "The Periodic Table of AI",
          description: "Implemented a conceptual framework organizing AI components into a visual 'Periodic Table' to help teams compose capabilities (Elements) into Architectures (Molecules)."
        },
        {
          name: "Dynamic Architecture Visualization",
          description: "Integrated Dagre for automated, directed-graph layout rendering of AI strategies and agent orchestration flows."
        }
      ],
      subProjects: [
        {
          title: "AItelier (Legacy Prototype)",
          description: "A precursor design prototype focusing on B2B utility for stylists, which laid the visual groundwork for polymorphic UIs."
        }
      ]
    },
    {
      id: "visual-arts",
      title: "Visual Arts & Photography",
      role: "Digital Artist",
      techStack: ["Lightroom", "Inkscape", "Blender"],
      summary: "Digital composition, astrophotography, landscape, and vector CG. Exploring aesthetics that directly inform frontend and UI design.",
      innovations: [],
      subProjects: []
    }
  ],
  research: [
    {
      title: "Variable Star Light Curve Classification",
      tech: ["Python", "Machine Learning", "Data Science"],
      description: "Classifying astronomical data from the TESS survey using Artificial Neural Networks and Self Organizing Maps. A laboratory for applied Deep Learning."
    },
    {
      title: "Open Clusters Evolution",
      tech: ["Blender 3D", "Python Scripting", "Astrophysics"],
      description: "Visualizing the evolution of open star clusters. An 8-week project under IIT Bombay blending programmatic logic with visual arts."
    },
    {
      title: "Photometry Image Reduction",
      tech: ["Astropy", "SciPy", "Computer Vision"],
      description: "An open-source software pipeline intended to supplant IRAF for astronomical photometry."
    },
    {
      title: "Agentic AI & The Second Brain",
      tech: ["Obsidian", "RAG", "Knowledge Graphs"],
      description: "Researching and building autonomous agent workflows and knowledge retrieval systems, mapping connections across disciplines."
    }
  ],
  timeline: [
    {
      role: "Full-Stack Engineer",
      organization: "Archimydes Inc.",
      period: "2022 — Present",
      description: "Operating at the intersection of frontend architecture and backend pipelines. Driving development for global clients using React, Next.js, and Django. Architecting critical infrastructure like the Holter MCT PDF Engine."
    },
    {
      role: "Director of R&D / Lead Developer",
      organization: "NEXT-STEP CARE / TechageLabs",
      period: "2019 — 2022",
      description: "Led technology and training initiatives. Built large-scale full-stack systems, monitored infrastructure, and mentored collaborative research teams in Python, Data Science, and Linux."
    },
    {
      role: "Astrophysics Researcher",
      organization: "Osmania University",
      period: "2015 — 2019",
      description: "Analyzed galaxy morphologies and neglected contact binaries. Processed vast amounts of optical and IR signals. Transitioned from observing the cosmos to writing the software that decodes it."
    }
  ]
};
