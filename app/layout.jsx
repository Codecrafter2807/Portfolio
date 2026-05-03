import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata = {
  title: 'Harshit Jain | Full-Stack AI Engineer',
  description: 'Full-Stack AI Engineer building production-ready web apps powered by LLMs, React/Next.js, and FastAPI/Django.',
  keywords: ['Full-Stack AI Engineer', 'React.js', 'Next.js', 'FastAPI', 'Django', 'LangGraph', 'Groq', 'AI', 'Web Development'],
  authors: [{ name: 'Harshit Jain' }],
  openGraph: {
    title: 'Harshit Jain | Full-Stack AI Engineer',
    description: 'Full-Stack AI Engineer building production-ready web apps powered by LLMs, React/Next.js, and FastAPI/Django.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
