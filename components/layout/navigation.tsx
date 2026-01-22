"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Code2, Book, Zap, FileCode, Menu, X, Search, Box } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { useState, useCallback, memo } from "react"

const navigation = [
  { name: "首页", href: "/", icon: Code2 },
  { name: "Claude Code", href: "/claude-code", icon: Zap },
  { name: "Open Code", href: "/open-code", icon: FileCode },
  { name: "教程", href: "/tutorials", icon: Book },
  { name: "Skills", href: "/skills", icon: Box },
  { name: "API 文档", href: "/api", icon: Search },
]

const NavLink = memo(({ item, isActive, onClick }: {
  item: typeof navigation[0]
  isActive: boolean
  onClick?: () => void
}) => {
  const Icon = item.icon
  return (
    <Link
      href={item.href}
      className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
        isActive
          ? "text-primary"
          : "text-muted-foreground"
      }`}
      onClick={onClick}
    >
      <Icon className="h-4 w-4" />
      {item.name}
    </Link>
  )
})

NavLink.displayName = "NavLink"

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl hidden sm:inline-block">
                Claude Code & Open Code 教程
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:gap-6">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                item={item}
                isActive={pathname === item.href}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors hover:text-primary rounded-md ${
                    isActive
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:bg-accent/50"
                  }`}
                  onClick={closeMobileMenu}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </nav>
  )
}
