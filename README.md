# Mahdi Alizade | Systems & Full-Stack Portfolio

This repository contains the source code for my personal portfolio and engineering showcase. It is designed to reflect a strict, low-level engineering philosophy, stripping away generic marketing fluff in favor of architectural clarity.

## Architecture & Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Strict dark theme, Glassmorphism UI)
- **Icons:** Lucide React
- **Deployment:** Vercel

The UI is intentionally built with a monolithic dark theme (`#050505` background) and electric cyan accents to mimic terminal and system-level environments.

## Project Structure

- `src/app/`: Next.js App Router endpoints and global layouts.
- `src/components/navigation/`: Glassmorphic sticky header and responsive drawers.
- `src/components/sections/`: Core portfolio modules (Hero, About, Projects, Contact).
- `src/components/ui/`: Reusable, constrained UI primitives (e.g., Button).
- `src/lib/site.ts`: Centralized static data store for projects and personal configuration.

## Environment Variables

Create a `.env.local` file in the root directory. **Do not commit this file.**

```env
# Contact Email for the direct dispatch component
NEXT_PUBLIC_CONTACT_EMAIL="your.email@example.com"

# Public professional profiles
NEXT_PUBLIC_LINKEDIN_URL="[https://linkedin.com/in/](https://linkedin.com/in/)..."
NEXT_PUBLIC_GITHUB_URL="[https://github.com/](https://github.com/)..."
Note: In production (Vercel), ensure these are added to the environment variables dashboard as Config (non-secret), except for any actual secret keys which must remain Secret.

Local Development
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
Open http://localhost:3000 in your browser.

Featured Engineering Work
This portfolio highlights specific system-level implementations:

Nova AI: Production MVP for automated clinic operations. (Private)

DBDB: Append-only key-value storage engine.

SlowTorch: Pure mathematical deep learning and autograd engine.

PyVM: Stack-based custom bytecode virtual machine.

Container Orchestrator: BullMQ & Dockerode isolated execution pipeline.

License
Copyright © Mahdi Alizade. All rights reserved.