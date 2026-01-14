# Baseline Academy

Baseline Academy is a professional bass guitar teaching service website based in Midrand, South Africa. This repository contains the complete source code for the academy's web platform, designed with a modern monochrome aesthetic and featuring vibrant, colourful imagery of students learning and performing.

## Features

- **Responsive Design**: Fully mobile-optimised experience.
- **Modern Aesthetic**: A strict monochrome visual identity (black, grey, white) using Oswald for headings and Inter for body text.
- **Interactive UI**: Smooth page transitions and reveal animations powered by Framer Motion.
- **Dynamic Content**: Pages for Home, About, Services, Lessons curriculum, FAQ, and Contact.

## Technical Architecture

### Frontend
- **Framework**: React 18 with TypeScript.
- **Routing**: Wouter for lightweight, efficient navigation.
- **Styling**: Tailwind CSS with shadcn/ui components.
- **Animations**: Framer Motion for smooth visual feedback.

### Backend
- **Runtime**: Node.js with Express and TypeScript.
- **Simplicity**: The current version is optimised for static hosting, with contact details provided directly for student enquiries.

---

## Local Development Setup

To run this project locally, ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your system.

### 1. Clone the Repository
```bash
git clone <repository-url>
cd baseline-academy
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Application
Run the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5000`.

---

## Operating System Specific Instructions

### Linux / macOS
The project uses standard Node.js scripts and should work out-of-the-box.

### Windows
- It is recommended to use **WSL2 (Windows Subsystem for Linux)** for the best development experience.
- If using PowerShell or CMD, ensure your execution policy allows running scripts.

---

## Deployment to GitHub Pages

This project is perfectly suited for GitHub Pages as a high-performance static site.

### Static Deployment
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder to the `gh-pages` branch. You can use the `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add deployment scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run: `npm run deploy`

### Custom Domain Configuration
1. In your GitHub repository, go to **Settings > Pages**.
2. Under **Custom domain**, enter your domain (e.g., `www.baselineacademy.co.za`).
3. Configure your DNS provider with the required `CNAME` or `A` records as provided by GitHub documentation.

---

## Credits

Built with ❤️ for Baseline Academy. Designed and developed to inspire the next generation of bass guitarists.
