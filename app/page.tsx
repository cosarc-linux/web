import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-linear-to-b from-primary/15 via-background to-background">
      {/* Header */}
      <header className="container mx-auto flex h-16 items-center justify-between px-4 mt-6">
        <div className="flex items-center gap-2">
          <Link href="/" aria-label="cosarc.org">
            <h1 className="text-4xl font-bold">Cosarc</h1>
          </Link>
        </div>
        <nav className="flex items-center gap-2">
          <Button variant="ghost" size="lg" className="text-base" asChild>
            <Link
              href="https://github.com/cosarc-linux/cosarc"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </Button>
          <Button variant="ghost" size="lg" className="text-base" asChild>
            <Link
              href="https://bsky.app/profile/cosarc.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bluesky
            </Link>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center gap-8 px-4 py-32 text-center">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Developer Preview</Badge>
          <Badge variant="destructive">Unstable</Badge>
        </div>
        <div className="space-y-4 w-full max-w-5xl">
          <h2 className="text-2xl font-extrabold tracking-tight lg:text-4xl">
            Privacy-first, Modern and Opinionated Linux
          </h2>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="h-12 px-6 text-lg  pointer-events-none"
              asChild
            >
              <Link href="/download">
                <Download className="mr-0.5 size-6" />
                Download ISO
                <Badge variant="secondary" className="ml-2 text-xs h-5 px-1.5">
                  Soon
                </Badge>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-6 text-lg  pointer-events-none"
              asChild
            >
              <Link href="/docs">
                Documentation
                <Badge variant="secondary" className="ml-2 text-xs h-5 px-1.5">
                  Soon
                </Badge>
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto">
          <p>
            Made by{" "}
            <Link
              href="https://www.rishabyadav.com"
              className="hover:underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rishab
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
