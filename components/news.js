export default function News({ posts }) {

  if (!posts) return <p>Loading news..</p>

  return (
    <div className="news-div sm:w-full self-center m-12 border rounded p-2 border-black">
      <h2 className="my-2">Latest News</h2>
      {posts.nodes.map(i => (
        <div className="my-2 p-2" key={i.id}>
          <h3>{i.title}</h3>
          <p className="p-2">
            <div 
              dangerouslySetInnerHTML={{ __html: i.content }}
            />
          </p>
        </div>
      ))}
    </div>
  )
}