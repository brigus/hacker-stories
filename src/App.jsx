import * as React from 'react';

const useStorageState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  )

  React.useEffect(() => {
    localStorage.setItem(key, value)
  }, [value, key])

  return [value, setValue]
}

const App = () => {
  const stories = [
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

  const [searchTerm, setSearchTerm] = useStorageState('search', 'React')

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const selectedStories = stories.filter((story) => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1>My hacker stories</h1>

      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        onInputChange={handleSearch}
      />

      <hr/>

      <List list={selectedStories} />
    </div>
  )
}

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
)

const Item = ({ item }) => (
  <li>
    <span>
        <a href={item.url}>{item.title}</a><br />
    </span>
    <span>{item.author}</span><br />
    <span>{item.num_comments}</span><br />
    <span>{item.points}</span><br />
  </li>
)


const InputWithLabel = ({ id, label, value, type='text', onInputChange }) => (
  <>
    <label htmlFor={id}>{label}</label>
    nbsp;
    <input id={id} type={type} value={value} onChange={onInputChange} />
  </>
)

export default App;