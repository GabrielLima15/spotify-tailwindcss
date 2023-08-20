'use client'
import {
  Shuffle,
  SkipBack,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
  Pause,
  SkipForward,
  Play,
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handleButtonClick = () => {
    setIsPlaying((prevState) => !prevState)
  }

  return (
    <footer className="fixed bottom-0 flex w-full items-center justify-between border-zinc-700 bg-zinc-900 px-6 py-3">
      <div className="flex items-center gap-3">
        <Image
          className="w-full"
          src="/play.jpg"
          width={56}
          height={56}
          alt=""
        />
        <div className="flex flex-col">
          <strong className="font-normal">Drown</strong>
          <span className="text-xs text-zinc-400">Bring Me The Horizon</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle fill="white" size={20} className="text-zinc-200" />
          <SkipBack fill="white" size={20} className="text-zinc-200" />

          <button
            onClick={handleButtonClick}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white  text-black"
          >
            {isPlaying ? (
              <Pause fill="black" />
            ) : (
              <Play className="pl-1" fill="black" />
            )}
          </button>

          <SkipForward fill="white" size={20} className="text-zinc-200" />
          <Repeat fill="white" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 w-96 rounded-full bg-zinc-600">
            <div className="h-1 w-40 rounded-full bg-zinc-200"></div>
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 w-24 rounded-full bg-zinc-600">
            <div className="h-1 w-10 rounded-full bg-zinc-200"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  )
}
