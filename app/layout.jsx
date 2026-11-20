import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata = {
  title: 'Harshit Jain | IT Support & Network Administrator',
  description: 'IT Support and Network Administrator experienced in Windows Server, Hyper-V, Active Directory, network troubleshooting, firewall configuration, and VPN support.',
  keywords: ['IT Support', 'Network Administrator', 'Windows Server', 'Hyper-V', 'Active Directory', 'VPN', 'Firewall Configuration', 'Python'],
  authors: [{ name: 'Harshit Jain' }],
  openGraph: {
    title: 'Harshit Jain | IT Support & Network Administrator',
    description: 'IT Support and Network Administrator experienced in Windows Server, Hyper-V, Active Directory, network troubleshooting, firewall configuration, and VPN support.',
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
