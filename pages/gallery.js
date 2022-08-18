import Image from "next/image";
import Layout from "../components/layout";

export default function Gallery() {
  return (
    <Layout>
      <h1 className="main-h1">Gallery</h1>
      <div className="gallery-img">
        <Image src={"https://www.fillmurray.com/500/200"} width={500} height={200} layout="fixed"/>
      </div>
      <div className="gallery-img">
        <Image src={"https://www.fillmurray.com/200/300"} width={200} height={300} layout="fixed"/>
      </div>
      <div className="gallery-img">
        <Image src={"https://www.fillmurray.com/600/400"} width={600} height={400} layout="fixed"/>
      </div>
    </Layout>
  )
}