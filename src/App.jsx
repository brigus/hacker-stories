import * as React from 'react';

const initialStories = [
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

const getAsynStories = () =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve({ data: { stories: initialStories } }),
      2000
    )
  )

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
  const [searchTerm, setSearchTerm] = useStorageState('search', 'React')

  const [stories, setStories] = React.useState([])

  React.useEffect(() => {
    getAsynStories().then(result => {
      setStories(result.data.stories)
    })
  }, [])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleRemoveStory = (item) => {
    // remove element from the stories array
    const newStories = stories.filter((story) => item.objectID !== story.objectID)
    setStories(newStories)
  }

  const selectedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1>My hacker stories</h1>

      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={handleSearch}
      >
        <strong>Search: </strong>
      </InputWithLabel>

      <hr/>

      <List list={selectedStories} onRemoveItem={handleRemoveStory} />
    </div>
  )
}

const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
    ))}
  </ul>
)

const Item = ({ item, onRemoveItem }) => (
  <li>
    <span>
        <a href={item.url}>{item.title}</a><br />
    </span>
    <span>{item.author}</span><br />
    <span>{item.num_comments}</span><br />
    <span>{item.points}</span><br />
    <span>
      <button type="button" onClick={() => onRemoveItem(item)}>Remove</button>
    </span>
  </li>
)


const InputWithLabel = ({ id, value, type='text', onInputChange, isFocused, children }) => {
  const inputRef = React.useRef()

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isFocused])

  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input ref={inputRef} id={id} type={type} value={value} onChange={onInputChange} />
    </>
  )
}

export default App;