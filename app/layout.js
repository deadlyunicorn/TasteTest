import './globals.css'

export const metadata = {
  title: 'Test your Taste',
  description: 'Test your Taste, the game. (Hisoka best boy).',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
