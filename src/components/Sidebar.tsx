import { HomeIcon, Search, Library } from 'lucide-react'

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 h-full w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>

      <nav className="mt-10 space-y-5">
        <a
          href="http://"
          className="text-zinc-2 flex items-center gap-3 text-sm font-semibold"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href="http://"
          className="text-zinc-2 flex items-center gap-3 text-sm font-semibold"
        >
          <Search />
          Search
        </a>
        <a
          href="http://"
          className="text-zinc-2 flex items-center gap-3 text-sm font-semibold"
        >
          <Library />
          Your Libary
        </a>
      </nav>

      <nav className="mt-6 flex flex-col gap-3 border-t border-zinc-800 pt-6">
        <a href="http://" className="text-sm text-zinc-400 hover:text-zinc-100">
          Funk Hits
        </a>

        <a href="http://" className="text-sm text-zinc-400 hover:text-zinc-100">
          Sertanejo
        </a>
        <a href="http://" className="text-sm text-zinc-400 hover:text-zinc-100">
          Tupac
        </a>
        <a href="http://" className="text-sm text-zinc-400 hover:text-zinc-100">
          Bring Me The Horizon
        </a>
      </nav>
    </aside>
  )
}
