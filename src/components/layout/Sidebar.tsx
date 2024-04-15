import { cn } from '@/lib/utils'

import { Layers2 } from 'lucide-react'

const items = [
  {
    title: 'Menu',
  },
  {
    title: 'Menu',
  },
  {
    title: 'Menu',
  },
  {
    title: 'Menu',
  },
  {
    title: 'Menu',
  },
]

export function Sidebar() {
  return (
    <nav
      className={cn('relative hidden h-screen border-r pt-16 lg:block w-72')}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <nav className="grid items-start gap-2">
              {items.map((item, index) => {
                return (
                  <a key={String(index)} href="/">
                    <span
                      className={cn(
                        'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                      )}
                    >
                      <Layers2 className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </span>
                  </a>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  )
}
