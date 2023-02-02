import Footer from '../components/footer'
import Navbar from '../components/navbar'
import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {

  return <>
    <NextNProgress
  color="#06b6d4"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
  showOnShallow={true}
/>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
