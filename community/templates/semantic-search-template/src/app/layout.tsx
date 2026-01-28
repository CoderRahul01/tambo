import { TamboProvider } from "@/providers/TamboClientProvider";
import "./globals.css";

export const metadata = {
  title: "Tambo Semantic Search Template",
  description:
    "A community template for building semantic search interfaces with Tambo AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <TamboProvider>{children}</TamboProvider>
      </body>
    </html>
  );
}
