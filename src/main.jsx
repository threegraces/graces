import { createRoot } from 'react-dom/client'
import React, { Suspense } from 'react'
import './styles.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <div class="header">
      <span class="active">TWITTER</span>
      <span>MEDIUM</span>
      <span>ETHERSCAN</span>
      <span>DEXTOOLS</span>
    </div>
    <div class="middle">
      <h2>The</h2>
      <h1>THREE GRACES</h1>
    </div>
  </>,
)
