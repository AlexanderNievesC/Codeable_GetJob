import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Global} from '@emotion/react/macro'
import { globalStyles } from './globalStyles';
import { MaxWidthWrapper } from './components/MaxWidthWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MaxWidthWrapper>
    <Global styles={globalStyles}/>
      <App />
    </MaxWidthWrapper>
  </React.StrictMode>
);


