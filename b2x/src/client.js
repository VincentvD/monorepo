/* eslint react/jsx-filename-extension: 0 */

import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import { hydrate } from 'react-dom'
import App from './app/App'

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
