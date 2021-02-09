import React from 'react';
import ReactDOM from 'react-dom';
import { applyPolyfills, defineCustomElements } from 'sample-component/loader';
import 'vue-component/dist/vue-component'

ReactDOM.render(
  <React.StrictMode>
    <my-component name="stencil" />
    <vue-component name="vue" />
  </React.StrictMode>,
  document.getElementById('root')
);

applyPolyfills().then(() => {
  defineCustomElements();
});