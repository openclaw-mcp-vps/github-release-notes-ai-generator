import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReleaseAI – Generate Release Notes from GitHub Commits",
  description: "AI analyzes your git commits and PRs to generate professional release notes and changelogs automatically. Built for open source maintainers and product teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="51fb8970-b0a9-4dee-912b-95b54baf16e6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
