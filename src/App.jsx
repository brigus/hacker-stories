const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abromov, Andrew Clarke',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]

function App() {
  return (
    <div>
      <h1>My hacker stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" /> 

      <hr/>

      <ul>
        {list.map(function(item) {
          return <li key={item.objectID}>
                   <span>
                    <a href={item.url}>{item.title}</a><br/>
                   </span>
                   <span>{item.author}</span><br/>
                   <span>{item.num_comments}</span><br/>
                   <span>{item.points}</span><br/>
                 </li>;
        })}
      </ul>
    </div>
  )
}

export default App;