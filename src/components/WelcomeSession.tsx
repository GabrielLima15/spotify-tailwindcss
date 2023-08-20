import { Play } from 'lucide-react'
import Image from 'next/image'

export const WelcomeSession = () => {
  const musics = [
    {
      imageMusic: <Image src="/musics/1.jpg" width={104} height={104} alt="" />,
      arrtistName: 'Mistureba',
    },
    {
      imageMusic: <Image src="/musics/2.jpg" width={104} height={104} alt="" />,
      arrtistName: 'Lofi Coding',
    },
    {
      imageMusic: <Image src="/musics/3.jpg" width={104} height={104} alt="" />,
      arrtistName: 'Funk Hits',
    },
    {
      imageMusic: <Image src="/musics/4.jpg" width={104} height={104} alt="" />,
      arrtistName: 'Bring Me Horizon',
    },
    {
      imageMusic: <Image src="/musics/6.jpg" width={104} height={104} alt="" />,
      arrtistName: 'Daily Mix 3',
    },
    {
      imageMusic: <Image src="/musics/5.jpg" width={104} height={104} alt="" />,
      arrtistName: 'Anime <3',
    },
  ]

  return (
    <div className="mt-4 grid grid-cols-3 gap-4">
      {musics.map((music, index) => (
        <a
          key={index}
          href="#"
          className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
        >
          {music.imageMusic}
          <strong>{music.arrtistName}</strong>
          <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 pl-1 text-black group-hover:visible">
            <Play fill="black" />
          </button>
        </a>
      ))}
    </div>
  )
}
