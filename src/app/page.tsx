import { Dailys } from '@/components/Dailys'
import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import { WelcomeSession } from '@/components/WelcomeSession'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="ml-72 flex-1 p-6 sm:ml-72">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="mt-10 text-4xl font-semibold">Bom dia</h1>

          <WelcomeSession />

          <h2 className="mt-10 text-2xl font-semibold">
            Feito para Gabriel_Lima
          </h2>

          <Dailys />
        </main>
      </div>

      {}
      <Footer />
    </div>
  )
}
