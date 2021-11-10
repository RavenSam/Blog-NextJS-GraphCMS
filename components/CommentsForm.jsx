import { useState, useEffect, useRef } from "react"
import { submitComment } from "../services"

export default function CommentsForm({ slug }) {
   const [error, setError] = useState(false)
   const [localStorage, setLocalStorage] = useState(null)
   const [ShowSuccessMsg, setShowSuccessMsg] = useState(false)
   const commentEl = useRef()
   const nameEl = useRef()
   const emailEl = useRef()
   const storageDataEl = useRef()

   useEffect(() => {
      nameEl.current.value = window.localStorage.getItem("name")
      emailEl.current.value = window.localStorage.getItem("email")
   }, [])

   const handleCommentSubmission = () => {
      setError(false)

      const { value: comment } = commentEl.current
      const { value: name } = nameEl.current
      const { value: email } = emailEl.current
      const { checked: storeData } = storageDataEl.current

      if (!comment || !name || !email) {
         setError(true)
         return
      }

      const commentObj = { name, email, comment, slug }

      if (storeData) {
         window.localStorage.setItem("name", name)
         window.localStorage.setItem("email", email)
      } else {
         window.localStorage.removeItem("name", name)
         window.localStorage.removeItem("email", email)
      }

      submitComment(commentObj).then((res) => {
         setShowSuccessMsg(true)

         console.log(res)

         setTimeout(() => {
            setShowSuccessMsg(false)
         }, 3000)
      })
   }

   return (
      <div className="bg-white  shadow-lg rounded-lg p-8 pb-12 mb-8 ">
         <h3 className="text-xl mb-8 font-semibold border-b pb-4 ">Comments</h3>

         <div className="grid grid-cols-1 gap-4 mb-4 ">
            {error && <p className="text-sm px-2 text-red-500">All fields are required.</p>}

            {ShowSuccessMsg && <span className="text-sm px-2  text-green-600">Comment submited for review</span>}

            <textarea
               ref={commentEl}
               name="comment"
               placeholder="Comment"
               className="p-4 outline-none w-full rounded-lg border focus:border-pink-500 bg-gray-200 text-gray-700"
            />
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
            <input
               ref={nameEl}
               name="name"
               type="text"
               placeholder="Name"
               className="px-4 py-2 outline-none w-full rounded-lg border focus:border-pink-500 bg-gray-200 text-gray-700"
            />

            <input
               ref={emailEl}
               name="email"
               type="email"
               placeholder="Email"
               className="px-4 py-2 outline-none w-full rounded-lg border focus:border-pink-500 bg-gray-200 text-gray-700"
            />
         </div>

         <div className="grid grid-cols-1 gap-4 mb-4 ">
            <div>
               <input ref={storageDataEl} type="checkbox" name="storeData" id="storeData" defaultChecked />
               <label htmlFor="storeData" className="text-gray-500 cursor-pointer ml-2 text-sm font-semibold">
                  Remember Me
               </label>
            </div>
         </div>

         <div className="mt-8">
            <button
               type="button"
               onClick={handleCommentSubmission}
               className="transition duration-300 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-base  rounded-full text-white px-8 py-3 font-semibold"
            >
               Comment
            </button>
         </div>
      </div>
   )
}
