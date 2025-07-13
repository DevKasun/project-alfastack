# AI SaaS

A modern, responsive landing page for an AI SaaS product built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth scrolling animations, modern UI components, and optimized performance.

## 🚀 Features

-   **Modern Design**: Clean, professional landing page with smooth animations
-   **Responsive Layout**: Mobile-first design that works across all devices
-   **Smooth Scrolling**: Enhanced user experience with Lenis smooth scroll
-   **Animations**: Subtle scroll-triggered animations using Motion library
-   **Performance Optimized**: Built with Next.js 15 and latest React 19
-   **TypeScript**: Full type safety throughout the application
-   **Tailwind CSS**: Utility-first styling for rapid development

## 🛠️ Tech Stack

-   **Framework**: Next.js 15 (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS v4
-   **Animations**: Motion library
-   **Smooth Scroll**: Lenis
-   **Package Manager**: pnpm

## 📁 Project Structure

```
project-alfastack/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── Button.tsx
│   └── Navbar.tsx
├── sections/              # Landing page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── TechStack.tsx
│   └── Contact.tsx
├── hooks/                 # Custom React hooks
│   └── useSmoothScroll.tsx
├── utils/                 # Utility functions
└── public/                # Static assets
```

## 🚀 Getting Started

### Prerequisites

-   Node.js 18+
-   pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd project-alfastack
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

-   `pnpm dev` - Start development server with Turbopack
-   `pnpm build` - Build for production
-   `pnpm start` - Start production server
-   `pnpm lint` - Run ESLint

## 🎨 Sections

The landing page includes the following sections:

1. **Hero** - Main introduction with call-to-action
2. **About** - Company/product overview
3. **Services** - AI services and offerings
4. **Tech Stack** - Technologies and tools used
5. **Contact** - Contact form and information

## 📱 Responsive Design

The landing page is fully responsive and optimized for:

-   Mobile devices (320px+)
-   Tablets (768px+)
-   Desktop (1024px+)
-   Large screens (1440px+)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with each push

### Other Platforms

The project can be deployed on any platform that supports Next.js:

-   Netlify
-   AWS Amplify
-   Railway
-   Render
