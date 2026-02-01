import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insight Office - Enterprise Software Solutions",
  description:
    "Build smarter enterprise solutions with Insight Office. AI-powered tools for learning, automation, image generation, and cross-platform integration.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
