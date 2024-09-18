import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./components/Header";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "./theme";
import { Footer } from "./components/Footer";

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

export const metadata: Metadata = {
  title: "Xonad Baltic",
  description: "Vitamin and mineral premixes for dairy food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
