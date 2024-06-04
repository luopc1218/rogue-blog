import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>rogue-blog</title>
        <meta
          name="description"
          content="Welcome to my blog. Here you will find articles on various topics."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
