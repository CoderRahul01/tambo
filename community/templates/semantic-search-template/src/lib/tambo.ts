import type { TamboComponent } from "@tambo-ai/react";
import { SearchInput, SearchInputSchema } from "../components/SearchInput";
import {
  SearchResultCard,
  SearchResultCardSchema,
} from "../components/SearchResultCard";

/**
 * Centrally register all components for the semantic search template.
 * These are exported to be used in the TamboProvider.
 */
export const components: TamboComponent[] = [
  {
    name: "SearchInput",
    description:
      "A sleek input field that captures natural language search queries and user search intent.",
    component: SearchInput,
    propsSchema: SearchInputSchema,
  },
  {
    name: "SearchResultCard",
    description:
      "A premium card component used to display detailed search results including titles, snippets, images, and ratings.",
    component: SearchResultCard,
    propsSchema: SearchResultCardSchema,
  },
];


export const tools = [];
