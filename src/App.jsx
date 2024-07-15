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

  const handleSearch = (event) => {
    console.log(event.target.value)
  }

  return (
    <div>
      <h1>My hacker stories</h1>

      <Search onSearch={handleSearch} />

      <hr/>

      <List list={stories} />
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

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    props.onSearch(event);
  };

  const handleBlur = (event) => {
    console.log(event);
  }

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} onBlur={handleBlur} />

      <p>
        Searching for: <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

export default App;