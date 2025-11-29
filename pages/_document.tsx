import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Blockchain Developer Portfolio - Building decentralized applications and smart contracts" />
        <meta property="og:title" content="Blockchain Developer Portfolio" />
        <meta property="og:description" content="Blockchain Developer Portfolio - Building decentralized applications and smart contracts" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

