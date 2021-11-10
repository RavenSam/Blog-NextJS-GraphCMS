import { useState, useEffect } from "react"
import moment from "moment"
import parse from "html-react-parser"
import { getComments } from "../services"

export default function Comments({ slug }) {
   const [comments, setComments] = useState([])

   useEffect(() => {
      getComments(slug).then((res) => setComments(res))
   }, [])

   return (
      <>
         {comments.length && (
            <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
               <h3 className="text-xl mb-8 font-semibold border-b pb-4">{comments.length} Comments</h3>

               {comments.map((comment, index) => (
                  <div key={index} className="border-b  mb-4 pb4">
                     <p className="mb-2 font-semibold text-gray-500 text-sm">
                        <span className="text-gray-700">{comment.name}</span> &bull;{" "}
                        {moment(comment.craetedAt).format("MMM DD, YYYY")}
                     </p>
                     <p className="whitespace-pre-line text-gray-600 w-full pb-4">{parse(comment.comment)}</p>
                  </div>
               ))}
            </div>
         )}
      </>
   )
}
