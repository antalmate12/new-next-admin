import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Roboto} from '@next/font/google'

const roboto = Roboto({
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ['latin']
})

export default function App({Component, pageProps}: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
