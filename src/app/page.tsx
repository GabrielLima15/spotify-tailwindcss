import {
  HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
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
            <a
              href="http://"
              className="text-sm text-zinc-400 hover:text-zinc-100"
            >
              Funk Hits
            </a>

            <a
              href="http://"
              className="text-sm text-zinc-400 hover:text-zinc-100"
            >
              Sertanejo
            </a>
            <a
              href="http://"
              className="text-sm text-zinc-400 hover:text-zinc-100"
            >
              Tupac
            </a>
            <a
              href="http://"
              className="text-sm text-zinc-400 hover:text-zinc-100"
            >
              Bring Me The Horizon
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="mt-10 text-4xl font-semibold">Bom dia</h1>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <a
              href="#"
              className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
            >
              <Image
                src="/recentlisten/album.jpg"
                width={104}
                height={104}
                alt=""
              />
              <strong>Lofi coding</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-1 text-black group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
            >
              <Image
                src="/recentlisten/album.jpg"
                width={104}
                height={104}
                alt=""
              />
              <strong>Lofi coding</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-1 text-black group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
            >
              <Image
                src="/recentlisten/album.jpg"
                width={104}
                height={104}
                alt=""
              />
              <strong>Lofi coding</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-1 text-black group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
            >
              <Image
                src="/recentlisten/album.jpg"
                width={104}
                height={104}
                alt=""
              />
              <strong>Lofi coding</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-1 text-black group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
            >
              <Image
                src="/recentlisten/album.jpg"
                width={104}
                height={104}
                alt=""
              />
              <strong>Lofi coding</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-1 text-black group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
            >
              <Image
                src="/recentlisten/album.jpg"
                width={104}
                height={104}
                alt=""
              />
              <strong>Lofi coding</strong>
              <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-1 text-black group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="mt-10 text-2xl font-semibold">
            Feito para Gabriel_Lima
          </h2>

          <div className="mt-4 grid grid-cols-5 gap-4">
            <a
              href="#"
              className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/recentlisten/album.jpg"
                width={350}
                height={350}
                alt=""
              />
              <strong className="font-medium">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Bring Me The Horizon, Motionless In White, While She Sleeps e
                mais
              </span>
            </a>
            <a
              href="#"
              className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/recentlisten/album.jpg"
                width={350}
                height={350}
                alt=""
              />
              <strong className="font-medium">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Bring Me The Horizon, Motionless In White, While She Sleeps e
                mais
              </span>
            </a>
            <a
              href="#"
              className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/recentlisten/album.jpg"
                width={350}
                height={350}
                alt=""
              />
              <strong className="font-medium">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Bring Me The Horizon, Motionless In White, While She Sleeps e
                mais
              </span>
            </a>
            <a
              href="#"
              className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/recentlisten/album.jpg"
                width={350}
                height={350}
                alt=""
              />
              <strong className="font-medium">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Bring Me The Horizon, Motionless In White, While She Sleeps e
                mais
              </span>
            </a>
            <a
              href="#"
              className="flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
            >
              <Image
                className="w-full"
                src="/recentlisten/album.jpg"
                width={350}
                height={350}
                alt=""
              />
              <strong className="font-medium">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">
                Bring Me The Horizon, Motionless In White, While She Sleeps e
                mais
              </span>
            </a>
          </div>
        </main>
      </div>
      <footer className="border-zinc-700 bg-zinc-800 p-6">footer</footer>
    </div>
  )
}
