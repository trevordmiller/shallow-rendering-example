import React from 'react';
import Accordion from './components/Accordion/Accordion';

const data = {
  summary: 'Lorem ipsum',
  details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
};

React.render(<Accordion summary={data.summary} details={data.details} />, document.getElementById('app'));
