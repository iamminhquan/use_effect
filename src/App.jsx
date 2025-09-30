import { Fragment } from 'react';
import { useEffect, useState } from 'react';

const contentTypes = ['comments', 'posts', 'albums'];

function App() {
  const [resultFromApi, setResultFromApi] = useState([]);
  const [contentType, setContentType] = useState('posts');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${contentType}`)
      .then((result) => result.json())
      .then((json) => setResultFromApi(json));
  }, [contentType]);

  return (
    <Fragment>
      {contentTypes.map((type) => {
        return (
          <button
            type="btn"
            className="btn btn-primary"
            key={type}
            onClick={() => setContentType(type)}
          >
            {type}
          </button>
        );
      })}

      <ul className="list-group" style={{ padding: 20 }}>
        {resultFromApi.map((result) => {
          return (
            <li key={result.id} className="list-group-item">
              {result.id} - {result.title || result.email}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

export default App;
