import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { HeroesApp } from './IndianApp';
import './styles.css'
ReactDOM.render(
    <HeroesApp />,
  document.getElementById('root')
  );

serviceWorkerRegistration.register();
