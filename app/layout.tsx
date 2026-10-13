import './globals.css'

export const metadata: any = {
  title: '💩 UselessOS™ (Funnel Edition) | useless.euton.co',
  description: 'The world\'s most over-engineered suite of useless utilities by euton.co.',
  metadataBase: new URL('https://useless.euton.co')
}

export default function RootLayout(props: any) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  )
}
