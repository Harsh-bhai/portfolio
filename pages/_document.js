import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <title>Portfolio - Harsh Dewangan</title>
      <body className='bg-gray-800 overflow-x-hidden scrollbar-none  ' >
      {/* <body className=' overflow-x-hidden scrollbar-none  absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]' > */}

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}