import './style.css';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'semantic-ui-css/semantic.min.css';

ReactDom.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.querySelector('#root')
)