"use client";

import { components } from "@/lib/tambo";
import { TamboProvider as ReactTamboProvider } from "@tambo-ai/react";
import React from "react";

/**
 * A Client Component wrapper for the TamboProvider.
 * This is necessary because the `components` array contains React components (functions),
 * which cannot be passed as props from a Server Component to a Client Component in Next.js.
 */
export function TamboProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactTamboProvider
      apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY || "your_api_key"}
      components={components}
    >
      {children}
    </ReactTamboProvider>
  );
}
