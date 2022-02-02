import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <meta name="description" content="Dev AT E-commerce website with Next.js" />
          <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
          <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" />
          <script src="/assets/js/bootstrap.bundle.min.js" />
          <script src="https://kit.fontawesome.com/a076d05399.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
