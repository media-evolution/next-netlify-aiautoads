import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="home-container"> {/* Use the unique class here */}
      <Head>
        <title>Ai, Automation & Ads</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="home-main"> {/* Use the unique class here */}
        <Header title="Ai, Automation & Ads" />
        <p className="description">
          With Spencer
        </p>
      </main>

      <Footer />
    </div>
  )
}