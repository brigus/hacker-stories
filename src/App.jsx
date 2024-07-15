import * as React from 'react';

const App = () => {
  console.log('App renders');

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
  ];

  const [searchTerm, setSearchTerm] = React.useState('React');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const selectedStories = stories.filter((story) => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My hacker stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <hr/>

      <List list={selectedStories} />
    </div>
  );
};

const List = (props) => {
  console.log('List renders');

  return (
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};

const Item = (props) => {
  console.log('Item renders');

  return (
    <li>
      <span>
          <a href="{props.item.url">{props.item.title}</a><br />
      </span>
      <span>{props.item.author}</span><br />
      <span>{props.item.num_comments}</span><br />
      <span>{props.item.points}</span><br />
    </li>
  );
};

const Search = (props) => {
  console.log('Search renders');

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={props.search} onChange={props.onSearch} />

      <p>
        Searching for: <strong>{props.search}</strong>
      </p>
    </div>
  );
};

export default App;