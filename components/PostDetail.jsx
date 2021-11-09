export default function PostDetail({ post }) {
   return (
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8 ">
         <div className="relative overflow-hidden shadow-md mb-5">
            <img src={post.featuredImage.url} alt={post.title} className="object-top h-full w-full  rounded-t-lg" />
         </div>
      </div>
   )
}
