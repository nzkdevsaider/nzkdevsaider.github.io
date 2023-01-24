import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#4D76FF" />

        <meta name="title" content="sebasmorant." />
        <meta
          name="description"
          content="Desarrollador web, MERN stack y backend."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sebasmorant.dev/" />
        <meta property="og:title" content="sebasmorant." />
        <meta
          property="og:description"
          content="Desarrollador web, MERN stack y backend."
        />
        <meta
          property="og:image"
          content="https://nzkdevsaider.github.io/iconm.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="250" />
        <meta property="og:image:height" content="250" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sebasmorant.dev/" />
        <meta property="twitter:title" content="sebasmorant." />
        <meta
          property="twitter:description"
          content="Desarrollador web, MERN stack y backend."
        />
        <meta
          property="twitter:image"
          content="https://nzkdevsaider.github.io/iconm.png"
        ></meta>
      </Head>
      <body className="dark:bg-sblack transition-colors">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
