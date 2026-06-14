# Dimitrios P. Batsilis — Personal Portfolio

A premium, high-performance developer portfolio website designed with strict minimalist aesthetics and built using the modern web stack.

---

## ⚡ Tech Stack & Architecture

- **Framework**: [Astro v6](https://astro.build/) (using static output mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using the high-performance Vite-native integration)
- **Content Management**: Astro Content Collections (with type-safe `.md` files managed via the Astro Content Layer)
- **Typography**: Inter (sans-serif) & Geist Mono (monospace)

---

## 🎨 Design System

Inspired by **Maria** and **Tone** minimalist Astro themes:
- **Monochromatic Base**: Tailored dark mode using a rich slate/zinc scale (`#09090b` page background).
- **Structure**: Clean borders, strict grid alignment, custom vertical timeline track, and ample whitespace to prioritize content clarity.
- **Typography**: Responsive font hierarchy, monospace technical coordinates, and custom dash (`—`) list bullet elements.
- **Silent UI**: Free of heavy shadows, gradient clutter, or performance-impairing animations.

---

## 📂 Project Structure

```text
BatsilisGR/
├── src/
│   ├── content/             # Type-safe portfolio data
│   │   ├── experience/      # Professional timeline (.md)
│   │   └── projects/        # Independent projects & SaaS (.md)
│   ├── layouts/
│   │   └── Layout.astro     # Core page HTML shell and SEO meta tags
│   ├── pages/
│   │   └── index.astro      # Main landing layout & content queries
│   ├── styles/
│   │   └── global.css       # Tailwind v4 directives & theme configurations
│   └── content.config.ts    # Astro v6 Content Layer definitions
├── public/                  # Favicons and static asset assets
├── astro.config.mjs         # Astro & Tailwind plugin settings
└── package.json             # Project scripts and dependencies
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (version 22.12.0 or higher) installed on your system.

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dimitrisbatsi/BatsilisGR.git
   cd BatsilisGR
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321/](http://localhost:4321/) in your browser to view the site.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The static build files will be generated in the `./dist/` directory.

---

## ☁️ Deployment

Since the website is compiled statically, it can be deployed to any modern static hosting provider:

### Vercel / Netlify
Connect this GitHub repository directly to Vercel. It will auto-detect the Astro framework and handle build steps automatically.

### Hetzner / Coolify
If hosting on a virtual private server (VPS) with Coolify:
1. Set up a **Static Site** resource in Coolify.
2. Link your GitHub repository.
3. Use the build command `npm run build` and set the publish directory to `dist`.
