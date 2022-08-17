import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='bg-gradient-to-r from-cyan-400 via-cyan-200 to-cyan-100 overflow-x-hidden' >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}