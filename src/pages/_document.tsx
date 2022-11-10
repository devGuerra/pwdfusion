import Document, { Head, Html, Main, NextScript } from 'next/document';
import { AppConfig } from '../config/AppConfig';


class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Miriam+Libre:wght@400;700&display=swap" rel="stylesheet" />
        <Head />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;