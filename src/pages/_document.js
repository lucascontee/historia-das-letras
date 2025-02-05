import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
             href="https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap" 
             rel="stylesheet"
          />

          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5994041301246823"
          crossorigin="anonymous"></script>
        </Head>
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
 
export default MyDocument