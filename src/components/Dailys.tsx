'use client'
import clsx from 'clsx'
import { Play } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export const Dailys = () => {
  const dailys = [
    {
      imageDaily: (
        <Image
          className="w-full"
          src="/dailys/1.jpg"
          width={350}
          height={350}
          alt=""
        />
      ),
      dailyName: 'Daily Mix 1',
      artitsNames:
        'Bring Me The Horizon, Asking Alexandria, Motionless In White e mais',
    },
    {
      imageDaily: (
        <Image
          className="w-full"
          src="/dailys/2.jpg"
          width={350}
          height={350}
          alt=""
        />
      ),
      dailyName: 'Daily Mix 2',
      artitsNames:
        'Henrique & Juliano, Lauana Prado, Guilherme & Benuto e mais',
    },
    {
      imageDaily: (
        <Image
          className="w-full"
          src="/dailys/3.jpg"
          width={350}
          height={350}
          alt=""
        />
      ),
      dailyName: 'Daily Mix 4',
      artitsNames: '$uicideboy$, Lil Peep, Night Lovell e mais',
    },
    {
      imageDaily: (
        <Image
          className="w-full"
          src="/dailys/4.jpg"
          width={350}
          height={350}
          alt=""
        />
      ),
      dailyName: 'Daily Mix 5',
      artitsNames: 'UCLÃ, Recayd Mob, Veigh e mais',
    },
    {
      imageDaily: (
        <Image
          className="w-full"
          src="/dailys/5.jpg"
          width={350}
          height={350}
          alt=""
        />
      ),
      dailyName: 'Daily Mix 6',
      artitsNames: 'PRXSXNT FXTURE, Ghostface Playa, SHADXWBXRN e mais',
    },
  ]

  const [isHover, setIsHover] = useState<boolean[]>(dailys.map(() => false))

  return (
    <div className="mb-32 mt-4 grid grid-cols-5 gap-4">
      {dailys.map((daily, index) => (
        <a
          onMouseEnter={() => {
            const newIsHover = [...isHover]
            newIsHover[index] = true
            setIsHover(newIsHover)
          }}
          onMouseLeave={() => {
            const newIsHover = [...isHover]
            newIsHover[index] = false
            setIsHover(newIsHover)
          }}
          key={index}
          href="#"
          className="group flex flex-col gap-2 rounded-md bg-white/5 p-3 hover:bg-white/10"
        >
          <div className="relative">
            {daily.imageDaily}
            <button
              className={clsx(
                'invisible absolute bottom-3 right-2 flex h-12 w-12  translate-y-full items-center justify-center rounded-full bg-green-400 pl-1 text-black transition delay-300 duration-200 ease-in-out group-hover:visible',
                {
                  'invisible translate-y-0 shadow-lg shadow-zinc-600':
                    isHover[index],
                  'translate-y-full opacity-0': !isHover[index],
                },
              )}
            >
              <Play fill="black" />
            </button>
          </div>

          <strong className="font-medium">{daily.dailyName}</strong>
          <span className="text-sm text-zinc-400">{daily.artitsNames}</span>
        </a>
      ))}
    </div>
  )
}
