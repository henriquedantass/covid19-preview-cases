import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>COVID-19 PREVIEW</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
