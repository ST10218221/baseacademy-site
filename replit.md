# Baseline Academy

## Overview

Baseline Academy is a professional bass guitar teaching service website built as a full-stack React application. The site features a monochrome (black, white, grey) design aesthetic with a bold, modern visual identity. It serves as a marketing and lead generation platform for bass guitar tuition services, featuring pages for Home, About, Services, Lessons curriculum, FAQ, and Contact with an enquiry form that persists to a database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **Animations**: Framer Motion for page transitions and reveal effects
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with custom configuration

The frontend follows a component-based architecture with:
- Reusable layout components (Navbar, Footer, Layout wrapper)
- Page components for each route (Home, About, Services, Lessons, FAQ, Contact)
- shadcn/ui primitives for consistent UI patterns
- British English spelling used throughout all content

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript compiled with tsx
- **API Design**: RESTful endpoints defined in shared/routes.ts with Zod schemas for type-safe request/response validation
- **Build Process**: Custom esbuild script bundles server for production with selective dependency bundling

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: shared/schema.ts (shared between client and server)
- **Current Tables**: `inquiries` table for storing contact form submissions
- **Migrations**: Managed via drizzle-kit with migrations output to /migrations folder

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # Reusable components and shadcn/ui
│   │   ├── pages/        # Route page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Database access layer
│   └── db.ts         # Drizzle database connection
├── shared/           # Shared code between client/server
│   ├── schema.ts     # Drizzle schema and Zod types
│   └── routes.ts     # API route definitions with schemas
└── script/           # Build scripts
```

### Design System
- Strict monochrome colour palette (black, white, greys only)
- Sharp corners (0 border radius) for modern bold aesthetic
- Typography: Oswald for headings, Inter for body text
- Custom CSS variables for theming defined in client/src/index.css

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via DATABASE_URL environment variable
- **Drizzle ORM**: Type-safe database queries and schema management
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI Component Libraries
- **@radix-ui/***: Headless UI primitives (accordion, dialog, dropdown, tabs, etc.)
- **shadcn/ui**: Pre-styled component library built on Radix
- **lucide-react**: Icon library
- **embla-carousel-react**: Carousel functionality
- **cmdk**: Command menu component

### Form and Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Zod resolver integration
- **zod**: Schema validation (shared between client/server)
- **drizzle-zod**: Generate Zod schemas from Drizzle tables

### Development Tools
- **Vite**: Frontend build tool and dev server
- **@replit/vite-plugin-***: Replit-specific dev plugins (error overlay, cartographer, dev banner)
- **esbuild**: Server bundling for production
- **drizzle-kit**: Database migration tooling