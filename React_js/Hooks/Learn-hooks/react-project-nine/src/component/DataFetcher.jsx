import React, { useEffect, useState } from 'react'

const DataFetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            setData(data);
            setLoading(false);
        });
    },[]);
    //it will run only on 1st render

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ): (
        <ul>
            {data.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default DataFetcher
