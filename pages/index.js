import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Ai, Automation & Ads" />
        <p className="description">
          With Spencer
        </p>
      </main>

      <Footer />
    </div>
  )
}
