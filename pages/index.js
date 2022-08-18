import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import News from '../components/news'
//import { getPages, getPosts } from '../lib/api'
import { CMS_NAME } from '../lib/constants'


export default function Index(/* { allPosts } */) {
  

  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
        <Image src={"https://zeninsouthlondon.co.uk/wp-content/uploads/2021/09/zen2.jpg"} width={1376/2} height={688/2}  alt="Bill Murray" />
        {/* <News posts={allPosts} /> */}
        <div className='home-tile'>
          <h2 className='home-tile-h2'>Lorem ipsum</h2>
                    <p className='home-tile-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div className='home-tile'>
          <h2 className='home-tile-h2'>Lorem ipsum</h2>
          <Image src={"https://www.fillmurray.com/300/200"} width={300} height={200} layout="fixed"/>
          <p className='home-tile-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div className='home-tile'>
          <h2 className='home-tile-h2'>Lorem ipsum</h2>
          <Image src={"https://www.fillmurray.com/200/300"} width={200} height={300} layout="fixed"/>
          <p className='home-tile-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div className='home-tile'>
          <h2 className='home-tile-h2'>Lorem ipsum</h2>
          <Image src={"https://www.fillmurray.com/300/200"} width={300} height={200} layout="fixed"/>
          <p className='home-tile-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
    </Layout>
  )
}

/* export async function getStaticProps() {
  const allPosts = await getPosts()

  return {
    props: { allPosts },
    revalidate: 10,
  }

} */
