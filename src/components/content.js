import { useEffect, useState } from 'react'

export default function Content()
{
  const [title, setTitle] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => setData(posts))
    console.log('call in effect')
  }, [])


  return (<div>
    <div>
      <label htmlFor="title">input title</label><br/>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
    </div>
    {console.log('re-render UI')}
    <div>
      <ul>
        {data.map(post => (<li key={post.id}>{post.title}</li>))}
      </ul>
    </div>
  </div>)
}