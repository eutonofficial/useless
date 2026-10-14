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
        url: '/icon.svg',
        width: 1200,
        height: 630,
        alt: 'Certificate of Wasted Time'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: '💩 Official Certificate of Wasted Time™ | UselessOS',
    description: 'The world\'s most over-engineered suite of useless utilities by euton.co.',
    images: ['/icon.svg']
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg'
  }
}

export default function RootLayout(props: any) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body>{props.children}</body>
    </html>
  )
}
