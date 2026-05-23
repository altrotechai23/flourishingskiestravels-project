import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { ScrollTop } from "@/components/scroll-top"
import "./globals.css"
import { WhatsAppButton } from "@/components/whatsapp-button"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "FlourishingTravels | Great Destinations You'd Love",
  description:
    "FlourishingTravels offers premium holiday packages, flight ticketing, hotel reservations and travel insurance. Experience the best tours to the world's greatest destinations.",
  generator: "v0.app",
  keywords: [
    "travel agency",
    "holiday packages",
    "flight booking",
    "tours",
    "travel insurance",
    "hotels",
    "FlourishingTravels",
  ],
  icons: {
    icon: [
      { url: "/new-logo.jpeg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/new-logo.jpeg", type: "image/jpeg" },
    ],
    shortcut: "/new-logo.jpeg",
  },
}

export const viewport: Viewport = {
  themeColor: "#2ecc71",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <header className="relative">
          <Navbar />
        </header>
        {children}
        <SiteFooter />
        <ScrollTop />
        {process.env.NODE_ENV === "production" && <Analytics />}
        <WhatsAppButton />
      </body>
    </html>
  )
}