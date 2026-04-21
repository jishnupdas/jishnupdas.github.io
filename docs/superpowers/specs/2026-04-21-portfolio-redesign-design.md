# Portfolio Redesign: Architect of Systems & Style

## Overview
A complete redesign of Jishnu P Das's personal portfolio website to reflect a transition from an astrophysics researcher to a Full-Stack Engineer and "Architect of Systems & Style." The design uses a "Premium Zinc" monochromatic theme inspired by the Nexus AI project, with subtle interactive elements and clear sectioning to distinguish professional work from hobby projects while weaving in personal philosophy and the concept of the "Second Brain."

## Architecture & Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4, utilizing a custom Zinc color palette (`--zinc-950` to `--zinc-100`).
- **Typography:** Geist and Geist Mono fonts (provided by `next/font/google`).
- **Deployment:** Vercel (or GitHub Pages, currently static export).

## Components & Layout

### 1. Header (The Architect)
- **Content:** Title ("Jishnu P Das"), Subtitle ("Architect of Systems & Style"), and a brief bio bridging astrophysics and high-utility AI.
- **Tags:** A grid of mono-styled tags representing core competencies (Next.js, Python, AWS, Data Science, etc.).

### 2. Active Directives (Professional Work)
- **Design:** Grid of "Cards" with subtle gradient borders (`gradient-border` class).
- **Projects:**
  - **Ovi:** The Style Architect (Next.js, Sartorial Engineering).
  - **PDF Generation Engine:** Medical AI (SQS/Lambda/S3).
  - **Nexus AI Dashboard:** AI Strategy (React, Periodic Table of AI).

### 3. The Path (Timeline)
- **Design:** A vertical dashed line with stylized dots (`timeline-dot`, `timeline-line`).
- **Content:** Reverse chronological professional evolution:
  - Full-Stack Engineer (Archimydes Inc., 2022 - Present).
  - Director of R&D / Lead Developer (2019 - 2022).
  - Astrophysics Researcher (Osmania University, 2015 - 2019).

### 4. Philosophy Integration
- **Design:** A centralized, serif, italicized blockquote acting as a visual break.
- **Content:** "Resolution in war, defiance in defeat, magnanimity in victory, goodwill in peace."

### 5. Laboratories (Hobby Projects)
- **Design:** A 2-column grid focusing on technical output and tools tested.
- **Projects:** Variable Star Light Curve Classification, Open Clusters Evolution Animation, Photometry Image Reduction, Visual Arts & Photography.

### 6. The System (Second Brain)
- **Design:** A subtly highlighted, pulse-animated section.
- **Content:** A brief explanation of the Obsidian Knowledge Graph that powers the cross-domain context switching.

## Data Flow
The application will initially be static, with content hardcoded into the React components based on the finalized brainstorming mockup.

## Error Handling & Edge Cases
- Ensure responsive design collapses grid layouts (e.g., `md:grid-cols-2` to `grid-cols-1`) gracefully on mobile devices.
- Fallback fonts should be properly configured if Geist/Geist Mono fail to load.

## Testing Strategy
- **Visual Regression:** Manually verify spacing, typography, and gradient borders match the approved mockup across mobile and desktop viewports.
- **Accessibility:** Ensure sufficient contrast between text (`--zinc-400`, `--zinc-100`) and background (`--zinc-950`).
