import './globals.css'

export const metadata: any = {
  title: '💩 UselessOS™ (Funnel Edition) | useless.euton.co',
  description: 'The world\'s most over-engineered suite of useless utilities by euton.co.',
  metadataBase: new URL('https://useless.euton.co'),
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
