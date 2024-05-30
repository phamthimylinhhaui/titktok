import { useEffect, useState } from 'react'

const tabs = ['posts', 'comments', 'albums']
export default function Content()
{
  const [title, setTitle] = useState('');
  const [data, setData] = useState([]);
  const [type, setType] = useState('posts');
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts => setData(posts))
  }, [type])


  return (<div>
    <div>
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setType(tab)}
          style={tab === type ? {color:'white', background:'black'} : {}}
        >
          {tab}
      </button>))}
    </div>
    <div>
      <label htmlFor="title">input title</label><br/>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
    </div>
    <div>
      <ul>
        {data.map(post => (<li key={post.id}>{post.title ?? post.name}</li>))}
      </ul>
    </div>
  </div>)
}