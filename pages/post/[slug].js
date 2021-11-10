import Head from "next/head"
import { useRouter } from "next/router"
import { getSlugs, getPostDetails } from "../../services"

import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader } from "../../components"

export default function PostDetails({ post }) {
   const router = useRouter()

   if (router.isFallback) {
      return <Loader />
   }

   return (
      <>
         <Head>
            <title>{post.title}</title>
         </Head>

         <div className="conteiner mx-auto px-3 sm:px-10 mb-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8  ">
               <div className="col-span-1 lg:col-span-8 ">
                  <PostDetail post={post} />

                  <Author author={post.author} />

                  <CommentsForm slug={post.slug} />

                  <Comments slug={post.slug} />
               </div>

               <div className="col-span-1 lg:col-span-4 ">
                  <div className="relative lg:sticky top-8">
                     <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />

                     <Categories />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export async function getStaticProps({ params }) {
   const post = await getPostDetails(params.slug)

   return {
      props: { post },
   }
}

export async function getStaticPaths() {
   const posts = await getSlugs()

   return {
      paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: true,
   }
}
