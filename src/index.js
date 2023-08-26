import React from 'react';
import ReactDOM from 'react-dom';
import AmznSearch from './AmznSearch';
import './AmznSearch.css';

const config = {
  debounceTime: 300,
  minQueryLength: 3
};

ReactDOM.render(
  <AmznSearch {...config} />,
  document.getElementById('root')
);