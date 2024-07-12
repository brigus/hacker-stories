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

const App = () => (
  <div>
    <h1>My hacker stories</h1>

    <Search />

    <hr/>

    <List />
  </div>
);

const List = () => (
  <ul>
    {list.map((item) => (
      <li key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a><br/>
        </span>
        <span>{item.author}</span><br/>
        <span>{item.num_comments}</span><br/>
        <span>{item.points}</span><br/>
      </li>
    ))}
  </ul>
);

const Search = () => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
  </div>
);

export default App;