import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'W9 Manager – Collect & Manage Contractor W-9 Forms',
  description: 'Send W-9 requests, contractors fill forms online, auto-generate 1099s at year-end, and track compliance effortlessly.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="104e3d2a-7dfe-495b-9342-77caca2e079b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
