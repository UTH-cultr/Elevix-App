import { Montserrat } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { QueryProvider } from '@/lib/query-provider'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from '@/components/theme-provider'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata = {
  title: 'Elevix',
  description: 'Accelerating your startup journey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn(montserrat.variable, "min-h-screen bg-background antialiased font-sans")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <QueryProvider>
            {children}
            <Toaster theme="dark" />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}