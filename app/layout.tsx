import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Owen Shao | Full Stack Developer & Polyglot Engineer',
  description: 'Full Stack Developer with expertise in Next.js, NestJS, and emerging technologies. Experienced in AI, blockchain, and quantitative trading. Multilingual professional fluent in 10+ languages.',
  keywords: [
    'Full Stack Developer',
    'Software Engineer',
    'Next.js',
    'NestJS',
    'TypeScript',
    'React',
    'Node.js',
    'PostgreSQL',
    'AWS',
    'Quantitative Trading',
    'Multilingual Developer',
    'AI Development',
    'WebSocket',
    'DevOps',
    'Azure',
    'Owen Shao'
  ],
  authors: [{ name: 'Owen Shao', url: 'https://linkedin.com/owen-shao' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://owenshao.space',
    siteName: 'Owen Shao Portfolio',
    title: 'Owen Shao | Full Stack Developer & Polyglot Engineer',
    description: 'Full Stack Developer specializing in modern web technologies and emerging tech.',
    images: [
      {
        url: '/og-image.png', // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Owen Shao - Full Stack Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Owen Shao | Full Stack Developer & Polyglot Engineer',
    description: 'Full Stack Developer specializing in modern web technologies and emerging tech.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://your-domain.com" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
