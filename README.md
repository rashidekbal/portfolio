# Rasid Ekbal — Portfolio

A modern, high-performance developer portfolio built to showcase full-stack, mobile, and AI systems engineering. Designed with a premium aesthetic featuring subtle glassmorphism, dynamic animations, and a sleek, tailored dark-navbar-on-light-body theme.

## 🚀 Tech Stack

- **Framework:** [React 18](https://react.dev/) powered by [Vite](https://vitejs.dev/) for lightning-fast HMR and optimized builds.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) using a custom CSS variable architecture for seamless, highly specific theming.
- **Routing:** [React Router v6](https://reactrouter.com/) for single-page application navigation.
- **Animations:** [Framer Motion](https://www.framer.com/motion/) for scroll-triggered reveals, page transitions, and subtle micro-interactions.
- **Icons:** [Lucide React](https://lucide.dev/) for clean, consistent SVG icons.

## ✨ Key Features

- **Premium Aesthetics:** Features a Vercel-style dotted grid mesh background with slow-drifting, ambient glowing blobs to give the site a lively but professional feel.
- **Unique Theming Architecture:** The application forces a clean, light-mode background for high readability of content, while retaining a permanent, sleek dark-mode glass-effect Navbar for high contrast.
- **Data-Driven UI:** Projects, skills, and work experiences are cleanly separated into a `src/data/` layer, making it extremely easy to update your portfolio without digging into UI code.
- **Responsive & Accessible:** Fully responsive grid layouts that degrade gracefully onto mobile devices, complete with a smooth animated mobile hamburger menu.
- **SEO Optimized:** Uses React Helmet Async to inject dynamic Meta and OpenGraph tags.

## 📂 Project Structure

```text
├── public/                 # Static assets (images, favicons, OG images)
│   └── images/             # Project screenshots and profile avatars
├── src/
│   ├── components/         # Reusable UI components (Buttons, Cards, Navbar, etc.)
│   ├── data/               # Content files (projects.js, skills.js, experience.js)
│   ├── pages/              # Route views (Home, Projects, Contact, etc.)
│   ├── App.jsx             # Main router setup and layout wrapper
│   ├── index.css           # Global CSS variables, animations, and Tailwind directives
│   └── main.jsx            # React mounting point
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind configuration and custom design tokens
└── vite.config.js          # Vite configuration
```

## 🛠️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   *The site will be available at `http://localhost:5173/`.*

### Building for Production

To create an optimized production build:
```bash
npm run build
```
This will compile the application into the `dist/` directory, ready to be deployed to Vercel, Netlify, or any static host.

## 📝 How to Update Your Content

- **Work Experience:** Edit `src/data/experience.js` to update your employment history.
- **Projects:** Edit `src/data/projects.js` to add or remove portfolio items.
- **Skills:** Edit `src/data/skills.js` to adjust your tech stack categories.
- **Bio/Identity:** Edit the hero section and About component directly in `src/pages/Home.jsx` and `src/components/AboutSection.jsx`.

---
*Built with ❤️ for shipping real systems.*
