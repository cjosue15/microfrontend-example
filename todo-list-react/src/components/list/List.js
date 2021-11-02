import React from 'react';

const List = () => {
  const data = [
    { id: 1, text: 'App 1' },
    { id: 2, text: 'App 2' },
    { id: 3, text: 'App 3' },
    { id: 4, text: 'App 4' },
  ];

  return (
    <ul>
      {data.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
};

export default List;
