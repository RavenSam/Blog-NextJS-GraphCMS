import moment from "moment"
import Link from "next/link"

export default function PostCard({ post }) {
   return (
      <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 ">
         <div className="relative overflow-hidden shadow-md pb-80 mb-6 ">
            <img
               src={post.featuredImage.url}
               alt={post.title}
               className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
            />
         </div>

         <h1 className="transition  duration-300  mb-8 cursor-pointer hover:text-pink-600 text-2xl font-semibold px-3">
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
         </h1>

         <div className="block  lg:flex text-center items-center justify-start mb-8 w-full px-3 ">
            <div className="flex items-center justify-start mb-4 lg:mb-0 w-full lg:w-auto mr-8">
               <img
                  src={post.author.photo.url}
                  alt={post.author.name}
                  height="28px"
                  width="28px"
                  className="align-middle rounded-full"
               />
               <p className="inline align-middle text-gray-500  ml-2 text-sm font-semibold">{post.author.name}</p>
            </div>

            <div className="flex items-center justify-start  ">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 inline mr-2 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
               </svg>
               <span className="align-middle text-sm font-semibold text-gray-500">
                  {moment(post.createdAt).format("MMM DD, YYYY")}
               </span>
            </div>
         </div>

         <p className="text-lg text-gray-700 font-normal px-3  mb-8">{post.excerpt}</p>

         <div className="text-center">
            <Link href={`/post/${post.slug}`}>
               <a className="transition duration-300 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-base font-medium rounded-full text-white px-8 py-3 ">
                  Continue Reading
               </a>
            </Link>
         </div>
      </div>
   )
}
