import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import News from '../components/news'
import { getPages, getPosts } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts, allPages }) {
  

  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
        <h1 className='self-center m-4'>Welcome to Zen in South London</h1>
        <Image src={"https://zeninsouthlondon.co.uk/wp-content/uploads/2021/09/zen2.jpg"} width={1376/2} height={688/2} alt="Zen in South London" />
        <News posts={allPosts} />
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = await getPosts()

  return {
    props: { allPosts },
    revalidate: 10,
  }
  /* const allPages = await getPages()

  return {
    props: { allPages },
    revalidate: 10,
  } */
}
