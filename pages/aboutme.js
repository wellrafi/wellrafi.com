import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fullstack Developer - Rafi Royhan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>it's false home page {process.env.MAINAPP}</h1>
        <Link href="/">
          <a>gome</a>
        </Link>
      </main>

      <footer>

      </footer>
    </>
  )
}
