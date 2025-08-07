# CMS Frontend Boilerplate

## Project Overview

This is a company boilerplate project for building frontend applications with a reusable UI component library. The project is designed to support React with or without Next.js and provides boilerplate code for integrating with different CMS systems.

## Key Features

### UI Component Library
- **Technology Stack**: React + TypeScript + Tailwind CSS
- **Component Library**: shadcn/ui as base, customized to Figma designs
- **Compatibility**: Components work standalone (React-only) or with Next.js
- **Documentation**: Interactive docs with copy-paste code examples

### CMS Integration Support
- **Architecture**: Catch-all routes for CMS-driven routing
- **Supported CMS**: Uniform (included), extensible for other systems
- **Development**: Remove unused CMS code as needed

### Documentation System
- **Technology**: MDX for rich, interactive documentation
- **Route**: `/docs` (development-only)
- **Features**: 
  - Component demos with live previews
  - Installation instructions (Radix dependencies)
  - Copy-paste code snippets with syntax highlighting
  - Similar UX to shadcn/ui documentation

## Project Structure

```
src/
├── app/
│   ├── docs/           # Documentation route (dev-only)
│   ├── uniform/        # Uniform CMS integration
│   └── api/            # API routes
├── components/
│   └── ui/             # Reusable UI components (shadcn/ui based)
├── lib/                # Utility functions
├── types/              # TypeScript definitions
└── uniform/            # Uniform-specific components and utils
```

## Development Workflow

1. **Component Development**: 
   - Use `npx shadcn@latest add [component]` to scaffold
   - Customize styling to match Figma designs
   - Ensure React-only compatibility

2. **Documentation**:
   - Document each component in `/docs`
   - Include installation instructions
   - Provide copy-paste code examples
   - Show component variants and props

3. **CMS Integration**:
   - Use catch-all routes for CMS-driven pages
   - Remove unused CMS boilerplate code
   - Configure environment variables for chosen CMS

## Hosting & Collaboration

- **Cloud Hosted**: Colleagues can view component library online
- **Self-Service**: Developers can copy installation + code snippets
- **Development Access**: `/docs` route only available in development mode

## Component Standards

### Requirements
- Must work without Next.js (React-only)
- TypeScript support required
- Tailwind CSS for styling
- Radix UI primitives where appropriate
- Proper prop interfaces and documentation

### Documentation Format
Each component should include:
- Visual example/demo
- Installation command (including Radix dependencies)
- Code snippet with syntax highlighting
- Props table
- Usage examples
- Variant demonstrations

## Configuration Files

- `components.json`: shadcn/ui configuration
- `next.config.ts`: Next.js configuration with MDX support
- `tsconfig.json`: TypeScript configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `uniform.server.config.js`: Uniform CMS configuration

## Getting Started

1. Clone the boilerplate
2. Run `npm install`
3. Configure environment variables (if using CMS)
4. Start development: `npm run dev`
5. Visit `/docs` to see component documentation
6. Remove unused CMS code as needed
7. Customize components to match your designs

## Future Enhancements

- Additional CMS integrations (Contentful, Strapi, etc.)
- More UI components
- Design system tokens
- Automated component testing
- Storybook integration (optional)
