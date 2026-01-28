# Tambo Semantic Search Template

A minimal, high-quality starter template for building AI-powered semantic search interfaces using [Tambo AI](https://tambo.co).

![Semantic Search Template Demo](https://raw.githubusercontent.com/tambo-ai/tambo/main/assets/template.gif)

## Overview

This template demonstrates how to leverage Tambo's generative UI system to:

1. **Interpret Intention**: Turn natural language queries into structured data using Zod schemas.
2. **Dynamic Rendering**: Automatically render sleek UI components like `SearchInput` and `SearchResultCard` based on AI-driven decisions.
3. **Interactive Search**: Provide a premium user experience with micro-animations and responsive layouts.

[View Video Demo](https://github.com/tambo-ai/tambo/public/assets/docs/template-demo.mp4)

## Prerequisites

- **Node.js**: 22+
- **Tambo API Key**: Get one from the [Tambo Dashboard](https://tambo.co/dashboard)
- **Framework**: Next.js 15 (App Router)

## Setup Instructions

1. **Clone the repository** (if not already done):

   ```bash
   git clone https://github.com/tambo-ai/tambo.git
   cd tambo/community/templates/semantic-search-template
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the template root:

   ```bash
   NEXT_PUBLIC_TAMBO_API_KEY=your_tambo_api_key_here
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Open the app**:
   Navigate to [http://localhost:3000](http://localhost:3000) and try entering a semantic query like "Show me luxury hotels in Paris with a balcony".

## What's Included

- **Tambo React SDK**: Core integration for generative UI rendering.
- **Lucide React**: For sleek, modern iconography.
- **Vanilla CSS**: Clean, performant styling with modern design tokens.
- **Strict TypeScript**: Type-safe development with Zod for AI schema definition.
- **ESLint**: Pre-configured linting rules following Tambo's standards.

## Component Registration

Components are registered in `src/lib/tambo.ts`:

```typescript
export const components = [
  {
    name: "SearchResultCard",
    description: "Card component to display a semantic search result",
    component: SearchResultCard,
    propsSchema: SearchResultCardSchema,
  },
  // ...
];
```

## Contributing

This template follows Tambo's community standards. Before submitting a PR, ensure:

```bash
npm run lint      # No errors
npm run typecheck # No errors
npm run build     # Success
```

---

Built with ❤️ for the Tambo Community.
