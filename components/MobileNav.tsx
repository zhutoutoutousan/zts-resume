'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const scrollLinks = [
  { href: '#top', label: 'Top' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#connect', label: 'Connect' },
  { href: '#more', label: 'Explore' },
]

const pageLinks = [
  { href: '/experience', label: 'Tech journey (full)' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/skills', label: 'Skills' },
]

export default function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isHome = pathname === '/'

  const handleNav = (href: string) => {
    setOpen(false)
    if (href.startsWith('#') && typeof window !== 'undefined') {
      if (!isHome) {
        return
      }
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={cn(
        'mobile-nav-bar md:hidden',
        'fixed left-0 right-0 top-0 z-[1100]',
        'flex items-center justify-between border-b border-white/15 bg-black/90 px-4 py-3',
        'backdrop-blur-md supports-[backdrop-filter]:bg-black/75'
      )}
    >
      <Link
        href="/"
        className="font-mono text-sm font-bold tracking-wide text-white"
        onClick={() => setOpen(false)}
      >
        Owen Shao
      </Link>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 text-white hover:bg-white/10"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="border-l border-white/15 bg-zinc-950 text-white [&>button]:text-white"
        >
          <SheetHeader>
            <SheetTitle className="text-left font-mono text-white">
              Menu
            </SheetTitle>
          </SheetHeader>
          <nav className="mt-6 flex flex-col gap-1 font-mono text-sm" aria-label="Mobile">
            {scrollLinks.map(({ href, label }) =>
              isHome ? (
                <button
                  key={href}
                  type="button"
                  className="rounded-md px-3 py-3 text-left hover:bg-white/10"
                  onClick={() => handleNav(href)}
                >
                  {label}
                </button>
              ) : (
                <Link
                  key={href}
                  href={href === '#top' ? '/' : `/${href}`}
                  className="rounded-md px-3 py-3 hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              )
            )}
            <div className="my-3 border-t border-white/10" />
            {pageLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-md px-3 py-3 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
