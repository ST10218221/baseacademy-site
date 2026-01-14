# Baseline Academy

Baseline Academy is a professional bass guitar teaching service website based in Midrand, South Africa. This repository contains the complete source code for the academy's web platform, designed with a modern monochrome aesthetic and featuring vibrant, colourful imagery of students learning and performing.

## Features

- **Responsive Design**: Fully mobile-optimised experience.
- **Modern Aesthetic**: A strict monochrome visual identity (black, grey, white) using Oswald for headings and Inter for body text.
- **Interactive UI**: Smooth page transitions and reveal animations powered by Framer Motion.
- **Service Enquiry System**: Integrated contact form that persists enquiries to a PostgreSQL database.
- **Dynamic Content**: Pages for Home, About, Services, Lessons curriculum, FAQ, and Contact.

## Technical Architecture

### Frontend
- **Framework**: React 18 with TypeScript.
- **Routing**: Wouter for lightweight, efficient navigation.
- **Styling**: Tailwind CSS with shadcn/ui components.
- **State Management**: TanStack React Query for synchronised server state.

### Backend
- **Runtime**: Node.js with Express and TypeScript.
- **Database**: PostgreSQL with Drizzle ORM for type-safe data management.
- **API**: RESTful endpoints with Zod schema validation for robust request handling.

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

### 3. Environment Variables
Create a `.env` file in the root directory and add your PostgreSQL connection string:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/baseline_academy
SESSION_SECRET=your_random_secret_here
```

### 4. Database Setup
Initialise the database schema using Drizzle:
```bash
npm run db:push
```

### 5. Start the Application
Run the development server (starts both frontend and backend):
```bash
npm run dev
```
The application will be available at `http://localhost:5000`.

---

## Operating System Specific Instructions

### Linux / macOS
The project uses standard Node.js scripts and should work out-of-the-box. Ensure you have the necessary permissions for your database socket if using local PostgreSQL.

### Windows
- It is highly recommended to use **WSL2 (Windows Subsystem for Linux)** for a smoother development experience.
- If using PowerShell or CMD, ensure your execution policy allows running scripts if you encounter issues with `npm`.
- Ensure PostgreSQL is installed and running as a service.

---

## Testing Locally

- **Manual Testing**: Navigate through the various pages and submit the contact form to verify the full-stack integration.
- **Console Logs**: Monitor the terminal for backend logs and the browser console for frontend diagnostics.

---

## Deployment to GitHub Pages

Since this project includes a dynamic Express backend for enquiry persistence, deploying to GitHub Pages (which only supports static hosting) requires a two-step approach if you wish to keep the backend functionality.

### Option A: Static Deployment (No Backend)
If you only need the static frontend:
1. Update `client/src/main.tsx` to remove any backend-dependent features if necessary.
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the `dist` folder to the `gh-pages` branch.

### Option B: Full Stack Deployment (Recommended)
GitHub Pages is not suitable for hosting the Node.js/PostgreSQL backend. For a full-stack experience:
1. Deploy the backend (Express + PostgreSQL) to a service like Railway, Render, or Fly.io.
2. Update the frontend `API_URL` to point to your hosted backend.
3. Deploy the built frontend to GitHub Pages using the `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```
4. Add deployment scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
5. Run: `npm run deploy`

### Custom Domain Configuration
1. In your GitHub repository, go to **Settings > Pages**.
2. Under **Custom domain**, enter your domain (e.g., `www.baselineacademy.co.za`).
3. Configure your DNS provider with the required `CNAME` or `A` records as provided by GitHub documentation.

---

## Credits

Built with ❤️ for Baseline Academy. Designed and developed to inspire the next generation of bass guitarists.
