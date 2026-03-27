import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata = {
  title: 'Harshit Jain | Full-Stack Developer',
  description: 'Full-Stack Developer with expertise in Python, Django, React.js, and Node.js. Building scalable web applications and AI-powered solutions.',
  keywords: ['Full-Stack Developer', 'React.js', 'Python', 'Django', 'Node.js', 'AI', 'Web Development'],
  authors: [{ name: 'Harshit Jain' }],
  openGraph: {
    title: 'Harshit Jain | Full-Stack Developer',
    description: 'Full-Stack Developer with expertise in Python, Django, React.js, and Node.js.',
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
