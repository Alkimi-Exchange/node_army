import "@/styles/globals.css"
import { font_roboto } from "@/util/fonts"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font_roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
