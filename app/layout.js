import "./globals.css";
import Providers from "./provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio</title>
        <meta
          name="Ariful's Portfolio"
          content="This portfolio is created with next js v13"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
