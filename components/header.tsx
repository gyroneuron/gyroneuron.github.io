import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-medium">Vivek Jaglan</h1>
            <p className="text-sm text-muted-foreground">Mobile Application Developer</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:vivekjaglan34@gmail.com">Email</a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/vivekjaglan" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://linkedin.com/in/vivekjaglan" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
