import Image from "next/image"

export default function Author({ author }) {
   return (
      <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-gradient-to-r from-gray-900 to-gray-700 ">
         <div className="absolute left-0 right-0 -top-14 ">
            <Image
               unoptimized
               height="100px"
               width="100px"
               src={author.photo.url}
               alt={author.name}
               className="align-middle rounded-full "
            />
         </div>

         <h3 className="text-white my-4 text-xl font-bold ">{author.name}</h3>
         <p className="text-white text-lg">{author.bio}</p>
      </div>
   )
}
