import { useState, useEffect } from "react"
import Link from "next/link"
import { getCategories } from "../services"

export default function Header() {
   const [categories, setCategories] = useState([])

   useEffect(() => {
      getCategories().then((res) => setCategories(res))
   }, [])

   return (
      <header className="w-full  bg-gray-800 mb-12 ">
         <div className="container mx-auto px-10 ">
            <div className="w-full inline-block  py-6">
               <div className="md:float-left block">
                  <Link href="/">
                     <a className="font-bold text-4xl text-white">BLOOG</a>
                  </Link>
               </div>

               <div className="hidden md:float-left md:contents">
                  {categories.map((category) => (
                     <Link href={`/category/${category.slug}`} key={category.slug}>
                        <a className="md:float-right mt-4 align-middle text-white ml-4 font-semibold text-sm hover:text-pink-600">
                           {category.name}
                        </a>
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </header>
   )
}
