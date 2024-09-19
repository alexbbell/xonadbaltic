'use client'
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./components/Header";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./theme";
import { Footer } from "./components/Footer";
import { GoogleAnalytics } from 'nextjs-google-analytics'

const GID = process.env.NEXT_PUBLIC_GID

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <title> Xonad Baltic </title>
        <meta name="description" content="Vitamin and mineral premixes for dairy food" />
        <meta property="og:description" content="Vitamin and mineral premixes for dairy food" />

      </head>
      <body
      style={{ height: '100%'}}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
              >

        <div style={{ display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between', flexGrow: 1, height: '100%',
          maxWidth: '950px',
          alignSelf: 'center', marginLeft: 'auto',  marginRight: 'auto', marginTop:0
          }}>

        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <GoogleAnalytics gaMeasurementId={GID} trackPageViews />
            <Header />
            <div  className='ContentWrapper'>

            {children}
            </div>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
        </div>
      </body>
    </html>
  );
}
