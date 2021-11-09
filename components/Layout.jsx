import Head from "next/head"
import { Header } from "."

export default function Layout({ children }) {
   return (
      <>
         <Head>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Header />

         {children}
      </>
   )
}
