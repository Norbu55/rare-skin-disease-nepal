import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import Nprogress from 'nprogress'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', (url) => {
    setLoading(true)
    Nprogress.start()
    Nprogress.configure({ showSpinner: false })
  })

  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false)
    Nprogress.done()
    Nprogress.configure({ showSpinner: false })
  })

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
