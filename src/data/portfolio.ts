export const portfolioData = {
  mainWork: [
    {
      id: "accurkardia",
      title: "Accurkardia",
      role: "Senior Developer",
      techStack: ["React", "Next.js", "Django", "AWS SQS", "AWS Lambda", "AWS S3", "Python"],
      summary: "Developing mission-critical medical technology platforms for high-fidelity medical ECG report generation and data visualization.",
      innovations: [
        {
          name: "Holter MCT PDF Generation Engine",
          description: "Architected an asynchronous, decoupled report generation pipeline using SQS and Lambda to handle massive throughput without blocking the main application API."
        },
        {
          name: "Memory & Pagination Optimization",
          description: "Engineered rendering strategies to overcome strict memory constraints when generating reports with thousands of data points, ensuring stability under heavy load."
        }
      ],
      subProjects: []
    }
  ],
  genAiExplorations: [
    {
      id: "ovi",
      title: "Ovi: The Style Architect",
      role: "Creator",
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
      subProjects: [
        {
          title: "AItelier",
          description: "A precursor design prototype focusing on B2B utility for stylists, which laid the visual groundwork for polymorphic UIs."
        }
      ]
    },
    {
      id: "bedtimestories",
      title: "Bedtime Stories",
      role: "Creator",
      techStack: ["Gen-AI", "UI Design"],
      summary: "A fun exploration of generative AI and creative UI ideas, crafting engaging bedtime stories through automated storytelling pipelines.",
      innovations: [],
      subProjects: []
    }
  ],
  collaborativeProjects: [
    {
      id: "nexus-ai",
      title: "Nexus AI Dashboard",
      role: "Collaborator",
      techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Dagre"],
      summary: "A weekend collaborative project building an AI-architecture consultation platform designed to visualize and strategize complex AI implementations.",
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
      subProjects: []
    },
    {
      id: "agency",
      title: "Agency",
      role: "Collaborator",
      techStack: ["Web Development", "Systems Design"],
      summary: "A weekend side-project exploring digital solutions, system design patterns, and collaborative development with friends.",
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
      role: "Senior Developer",
      organization: "Archimydes Inc.",
      period: "2022 — Present",
      description: "Operating at the intersection of frontend architecture and backend pipelines. Driving development for global clients using React, Next.js, and Django. Architecting critical infrastructure like the Accurkardia Holter MCT PDF Engine."
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
