import './globals.css'

export const metadata: any = {
  title: '💩 UselessOS™ (Funnel Edition) | useless.euton.co',
  description: 'The world\'s most over-engineered suite of useless utilities by euton.co.',
  metadataBase: new URL('https://useless.euton.co'),
  openGraph: {
    title: '💩 Official Certificate of Wasted Time™ | UselessOS',
    description: 'Officially certified squandered potential, kinetic mouse mileage, and unnecessary clicks by euton.co.',
    url: 'https://useless.euton.co',
    siteName: 'UselessOS by euton.co',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Official Certificate of Wasted Time™'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '💩 Official Certificate of Wasted Time™ | UselessOS',
    description: 'The world\'s most over-engineered suite of useless utilities by euton.co.',
    images: ['/og-image.jpg']
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg'
  }
}

export const viewport: any = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
}

export default function RootLayout(props: any) {
  // Hit me baby one more time, responsive mobile viewport online
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body>{props.children}</body>
    </html>
  )
}
