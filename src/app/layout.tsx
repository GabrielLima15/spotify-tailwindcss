import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spotify TailwindCSS',
  description: 'Listen to music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-800 text-zinc-50">{children}</body>
    </html>
  )
}
