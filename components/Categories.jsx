import { useState, useEffect } from "react"
import Link from "next/link"
import { getCategories } from "../services"

export default function Categories() {
   const [categories, setCategories] = useState([])

   useEffect(() => {
      getCategories().then((res) => setCategories(res))
   }, [])

   return (
      <div className="bg-white shadow-lg rounded-lg p-8 mb-12  ">
         <h3 className="text-xl mb-8 font-semibold border-b pb-6 ">Categories</h3>

         {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
               <a className="block pb-3 mb-3 font-semibold text-gray-600 transition  duration-200  hover:text-pink-600 ">
                  &#10022; {category.name}
               </a>
            </Link>
         ))}
      </div>
   )
}
