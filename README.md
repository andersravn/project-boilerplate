# CMS Frontend Boilerplate

A production-ready boilerplate for building React applications with a comprehensive UI component library and CMS integration support.

## Features

🧩 **UI Component Library** - Reusable, accessible components based on shadcn/ui
📱 **Framework Agnostic** - Works with React standalone or Next.js  
🎨 **Customizable Design System** - Easy theming with Tailwind CSS
📝 **CMS Integration** - Boilerplate for Uniform, Contentful, and other CMS systems
📚 **Comprehensive Documentation** - Interactive docs with copy-paste examples
🔧 **Developer Experience** - TypeScript, ESLint, and modern tooling

## Quick Start

```bash
# Clone the repository
git clone <repository-url> my-project
cd my-project

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000/docs` to view the documentation and component library.

## Documentation

The `/docs` route provides comprehensive documentation including:

- **Getting Started Guide** - Setup, configuration, and customization
- **Component Library** - Interactive demos with copy-paste code
- **CMS Integration** - Setup guides for different CMS systems
- **Best Practices** - Development workflows and patterns

> 📝 Documentation is only available in development mode for security.

## Project Structure

```
src/
├── app/
│   ├── docs/           # Documentation (dev-only)
│   ├── uniform/        # Uniform CMS integration  
│   └── api/            # API routes
├── components/
│   ├── ui/             # UI component library
│   └── docs/           # Documentation components
├── lib/                # Utility functions
├── types/              # TypeScript definitions
└── uniform/            # CMS-specific code
```

## UI Components

Built with [shadcn/ui](https://ui.shadcn.com) and [Radix UI](https://radix-ui.com):

- ✅ Fully accessible (ARIA compliant)
- ✅ TypeScript support  
- ✅ Customizable with Tailwind CSS
- ✅ Works without Next.js
- ✅ Copy-paste friendly

### Adding Components

```bash
# Add individual components
npx shadcn@latest add button
npx shadcn@latest add card

# See available components  
npx shadcn@latest add
```

## CMS Integration

### Uniform (Included)

Complete integration with visual editing and component mapping.

```bash
# Set up environment variables
cp .env.example .env.local
# Add your Uniform project credentials
```

### Other CMS Systems

Boilerplate structure supports easy integration with:
- Contentful
- Strapi  
- Sanity
- Custom headless CMS

Remove unused CMS code to keep your bundle lean.

## Customization

### Design System

Customize colors, typography, and spacing:

```css
/* src/app/globals.css */
:root {
  --primary: your-brand-color;
  --secondary: your-secondary-color;
}
```

### Component Variants

Extend components with your design requirements:

```tsx
// Add custom button variants
const buttonVariants = cva(base, {
  variants: {
    variant: {
      brand: "your-brand-styles",
      gradient: "your-gradient-styles",
    }
  }
});
```

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Other Platforms

Compatible with any Node.js hosting:
- Netlify
- Railway  
- AWS Amplify
- Digital Ocean

## Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## What's Included

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **MDX** for documentation
- **ESLint & Prettier** for code quality
- **Uniform CMS** integration (optional)

## Support & Resources

- 📚 [Documentation](http://localhost:3000/docs) (development)
- 🎨 [shadcn/ui](https://ui.shadcn.com)
- 🎯 [Tailwind CSS](https://tailwindcss.com)
- ⚛️ [Next.js](https://nextjs.org)

---

**Built with ❤️ for developer productivity and design system consistency.**

Add a webhook if you have a deployed app [https://docs.uniform.app/docs/learn/tutorials/nextjs-app-router#3-2-configure-webhooks](https://docs.uniform.app/docs/learn/tutorials/nextjs-app-router#3-2-configure-webhooks)

### Removal instructioncs
Reverse the manual setup in the Next.js tutorial [https://docs.uniform.app/docs/learn/tutorials/nextjs-app-router#2-add-the-uniform-sdk-into-your-app](https://docs.uniform.app/docs/learn/tutorials/nextjs-app-router#2-add-the-uniform-sdk-into-your-app)

## Security

### Content Security Policy
Applied in next.config.ts. Consider whether a nonce approach is needed, through middleware.ts. Read the Next.js docs:

https://nextjs.org/docs/app/guides/content-security-policy

## Type generation
Configure endpoint in openapi-ts.config.ts.

Example:
```ts
import { defineConfig } from "@hey-api/openapi-ts";
import { config } from "dotenv";

// Load environment variables from .env file
config();

export default defineConfig({
    input: `${process.env.UMBRACO_API}/umbraco/swagger/delivery/swagger.json`,
    output: "src/types/umbraco",
    plugins: ["@hey-api/client-fetch"],
});

```

## TODO
[ ] Security headers
[ ] Umbraco components like UmbracoImage and Umbraco Link
[ ] TS generation for Umbraco
[ ] NIS2 hjælp
[ ] Min/max width "site"/content (nav/footer and content)
sitemap.xml - support for different languages
robots.txt
[ ] Logging