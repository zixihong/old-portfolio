import './global.css'

export const metadata = {
  title: "BH",
  description: 'Everything & More'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel='icon' href='/stars.jpg' />
      </head>
      <body>
        <div className="root-layout">
          {children}
        </div>
      </body>
    </html>
  )
}