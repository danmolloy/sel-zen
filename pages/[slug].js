import { getPages } from "../lib/api"

export default function WpPage() {
  return (
    <p>Hello</p>
  )
}

/* export async function getStaticProps() {
  const allPages = await getPages()

  return {
    props: { allPages },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const allPosts = await getPages()

  return {
    paths: allPosts.nodes.map(i => `/${node.slug}`) || [],
    fallback: true,
  }
} */