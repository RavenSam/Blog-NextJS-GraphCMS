import Head from "next/head"
import { Header } from "."
import NextNprogress from "nextjs-progressbar"


export default function Layout({ children }) {
   return (
      <>
         <Head>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <NextNprogress options={{ showSpinner: false }} color="#db2777" startPosition={0.3} />

         <Header />

         {children}
      </>
   )
}
