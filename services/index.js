import { request, gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT

export async function getPosts() {
   const query = gql`
      query MyQuery {
         postsConnection {
            edges {
               node {
                  author {
                     name
                     id
                     bio
                     photo {
                        url
                     }
                  }
                  createdAt
                  slug
                  title
                  excerpt
                  featuredImage {
                     url
                  }
                  categories {
                     name
                     slug
                  }
               }
            }
         }
      }
   `

   const result = await request(graphqlAPI, query)

   return result.postsConnection.edges
}

export async function getSlugs() {
   const query = gql`
      query GetSlugs {
         postsConnection {
            edges {
               node {
                  slug
               }
            }
         }
      }
   `

   const result = await request(graphqlAPI, query)

   return result.postsConnection.edges
}

export async function getPostDetails(slug) {
   const query = gql`
      query GetPostDetails($slug: String!) {
         post(where: { slug: $slug }) {
            author {
               name
               id
               bio
               photo {
                  url
               }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
               url
            }
            categories {
               name
               slug
            }
            content {
               raw
            }
         }
      }
   `

   const result = await request(graphqlAPI, query, { slug })

   return result.post
}

export async function getRecentPosts() {
   const query = gql`
      query GetPostDetails(){
         posts(
            orderBy: createdAt_ASC
            last:3
            ){
               title
               featuredImage{
                  url
               }
               createdAt
               slug
            }
      }
   `

   const result = await request(graphqlAPI, query)

   return result.posts
}

export async function getSimilarPosts(categories, slug) {
   const query = gql`
      query GetPostDetails($slug: String!, $categories: [String!]) {
         posts(where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }, last: 3) {
            title
            featuredImage {
               url
            }
            createdAt
            slug
         }
      }
   `

   const result = await request(graphqlAPI, query, { slug, categories })

   return result.posts
}

export async function getCategories() {
   const query = gql`
      query GetCategories {
         categories {
            name
            slug
         }
      }
   `

   const result = await request(graphqlAPI, query)

   return result.categories
}
