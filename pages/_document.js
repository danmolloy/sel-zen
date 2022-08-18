import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <link href="https://fonts.googleapis.com/css2?family=Nunito&family=Aboreto&display=swap" rel="stylesheet" />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
